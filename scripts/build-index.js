/**
 * build-index.js
 * Node script to traverse starters/, projects/, rules/ and build a consolidated index.json
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const STARTERS_DIR = path.join(__dirname, "..", "src", "starters");
const PROJECTS_DIR = path.join(__dirname, "..", "src", "projects");
const RULES_DIR = path.join(__dirname, "..", "src", "rules");
const OUTPUT_PATH = path.join(__dirname, "..", "data", "index.json");

/**
 * We'll define a function that recursively traverse a directory
 * returning a list of file paths. This can handle nested subfolders if needed.
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

/**
 * parseFile: given a full path, parse either .mdc (with front matter) or .json
 * returns an object with { id, type, title, description, tags, content, ... }
 */
function parseFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const raw = fs.readFileSync(filePath, "utf8");
  const relative = path.relative(path.join(__dirname, ".."), filePath);

  // We'll figure out top-level folder from relative path for 'category': starters, projects, rules
  let category;
  if (relative.startsWith("starters")) category = "starter";
  else if (relative.startsWith("projects")) category = "project";
  else if (relative.startsWith("rules")) category = "single-rule";
  else category = "unknown";

  if (ext === ".mdc" || ext === ".md") {
    // parse front matter
    const fm = matter(raw);
    const data = fm.data || {};
    const content = fm.content || "";

    // Build a custom ID from path or metadata
    const id = data.id || relative.replace(/\//g, "-"); // simple example
    return {
      id,
      category,
      title: data.title || path.basename(filePath),
      description: data.description || "",
      tags: data.tags || [],
      content,
      filePath: relative,
    };
  } else if (ext === ".json") {
    // parse JSON
    try {
      const jsonObj = JSON.parse(raw);
      // same or similar structure
      const id = jsonObj.id || relative.replace(/\//g, "-");
      return {
        id,
        category,
        title: jsonObj.title || path.basename(filePath),
        description: jsonObj.description || "",
        tags: jsonObj.tags || [],
        content: jsonObj.content || "",
        filePath: relative,
      };
    } catch (err) {
      console.error(`Error parsing JSON file: ${filePath}`, err);
      return null;
    }
  } else {
    // skip unknown file types
    return null;
  }
}

/**
 * Main
 */
function main() {
  const index = [];

  [STARTERS_DIR, PROJECTS_DIR, RULES_DIR].forEach((baseDir) => {
    if (!fs.existsSync(baseDir)) return; // skip if dir doesn't exist
    const files = getAllFiles(baseDir);
    files.forEach((fp) => {
      // parse each file if ext is .md, .mdc, or .json
      const ext = path.extname(fp).toLowerCase();
      if (![".md", ".mdc", ".json"].includes(ext)) return;

      const parsed = parseFile(fp);
      if (parsed) index.push(parsed);
    });
  });

  // Optionally, we can add some sorting or unify certain fields
  // e.g., sort by category, then title
  index.sort(
    (a, b) =>
      a.category.localeCompare(b.category) || a.title.localeCompare(b.title)
  );

  // Write the final array to index.json
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(index, null, 2), "utf8");
  console.log(`Index built with ${index.length} entries.`);
}

main();
