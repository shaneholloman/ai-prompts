/**
 * build-index.js
 * Node script to traverse starters/, projects/, rules/ and build a consolidated index.json
 */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const PROMPTS_DIR = path.join(__dirname, "..", "prompts");
const OUTPUT_PATH = path.join(__dirname, "..", "data", "index.json");

/**
 * Parse prompt files (.md, .mdc) in a directory
 */
function getPromptContent(dirPath) {
  const promptFiles = fs
    .readdirSync(dirPath)
    .filter((file) =>
      [".md", ".mdc"].includes(path.extname(file).toLowerCase())
    )
    .map((file) => {
      const filePath = path.join(dirPath, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const relative = path.relative(path.join(__dirname, ".."), filePath);
      const fm = matter(raw);
      const data = fm.data || {};
      const content = fm.content || "";
      const id = data.id || relative.replace(/\//g, "-");
      return {
        id,
        description: data.description || "",
        globs: data.globs || "",
        content,
        filePath: relative,
      };
    });

  return promptFiles;
}

/**
 * parseFile: given a full path, parse either .mdc (with front matter) or .json
 * returns an object with { id, type, title, description, tags, content, ... }
 */
function parseFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const raw = fs.readFileSync(filePath, "utf8");
  const relative = path.relative(path.join(__dirname, ".."), filePath);

  if (ext === ".json") {
    const data = JSON.parse(raw);
    // Get prompts content from the same directory as aiprompt.json
    const dirPath = path.dirname(filePath);
    const prompts = getPromptContent(dirPath);

    return {
      ...data,
      prompts,
      filePath: relative,
    };
  } else {
    // skip unknown file types
    return null;
  }
}

function main() {
  const index = [];

  if (!fs.existsSync(PROMPTS_DIR)) {
    console.log("Prompts directory not found");
    return;
  }

  // Get all prompt category folders
  const promptFolders = fs
    .readdirSync(PROMPTS_DIR)
    .map((folder) => path.join(PROMPTS_DIR, folder))
    .filter((folderPath) => fs.statSync(folderPath).isDirectory());

  // Process each prompt folder
  promptFolders.forEach((folderPath) => {
    const aiPromptPath = path.join(folderPath, "aiprompt.json");
    if (fs.existsSync(aiPromptPath)) {
      const parsed = parseFile(aiPromptPath);
      if (parsed) index.push(parsed);
    }
  });

  // Optionally, we can add some sorting or unify certain fields
  // e.g., sort by category, then title
  index.sort((a, b) => a.name.localeCompare(b.name));

  // Write the final array to index.json
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(index, null, 2), "utf8");
  console.log(`Index built with ${index.length} entries.`);
}

main();
