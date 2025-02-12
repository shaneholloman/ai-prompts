const fs = require("fs").promises;
const path = require("path");

const PROMPTS_DIR = path.join(__dirname, "..", "prompts");

const TYPES = ["rule", "agent", "feature"];

// Add this at the top level of the file, after the TYPES constant
const slugs = new Set();

async function validateDirectory(dirPath) {
  const items = await fs.readdir(dirPath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);

    // Check for hidden files/directories (starting with .)
    if (item.name.startsWith(".")) {
      console.log(`Removing hidden item: ${fullPath}`);
      if (item.isDirectory()) {
        await fs.rm(fullPath, { recursive: true });
      } else {
        await fs.unlink(fullPath);
      }
      continue;
    }

    // For starters and projects directories
    if (item.isDirectory()) {
      // Check contents of each subdirectory
      const subItems = await fs.readdir(fullPath, { withFileTypes: true });

      // Check for metadata.json
      if (!subItems.some((f) => f.name === "aiprompt.json")) {
        throw new Error(`Missing aiprompt.json in ${fullPath}`);
      }

      // Validate aiprompt.json contents
      const metadataPath = path.join(fullPath, "aiprompt.json");
      try {
        const content = await fs.readFile(metadataPath, "utf8");
        const metadata = JSON.parse(content);
        validateMetadata(metadata);
      } catch (err) {
        if (err instanceof SyntaxError) {
          throw new Error(`Invalid JSON in ${metadataPath}: ${err.message}`);
        }
        throw new Error(`Error reading ${metadataPath}: ${err.message}`);
      }

      // Validate all files in subdirectory
      for (const subItem of subItems) {
        if (subItem.isDirectory()) {
          throw new Error(
            `Nested directories not allowed in ${fullPath}: ${subItem.name}`
          );
        }

        if (
          !subItem.name.endsWith(".mdc") &&
          !subItem.name.endsWith(".md") &&
          subItem.name !== "aiprompt.json"
        ) {
          throw new Error(
            `Invalid file type in ${fullPath}: ${subItem.name}. Only .mdc, .md and aiprompt.json files are allowed.`
          );
        }
      }
    } else {
      throw new Error(`Only directories allowed in ${dirPath}`);
    }
  }
}

function stringHasText(str) {
  return typeof str === "string" && str.trim().length > 0;
}

// Modify the validateMetadata function to check for duplicate slugs
function validateMetadata(metadata) {
  const requiredKeys = ["name", "description", "type", "slug", "author"];
  for (const key of requiredKeys) {
    if (!(key in metadata)) {
      throw new Error(`Missing required key in aiprompt.json: ${key}`);
    }
  }

  // Validate field types
  if (!stringHasText(metadata.name)) {
    throw new Error("name must be a string");
  }
  if (!stringHasText(metadata.description)) {
    throw new Error("description must be a string");
  }
  if (!stringHasText(metadata.type)) {
    throw new Error("type must be a string");
  }
  if (!TYPES.includes(metadata.type)) {
    throw new Error(
      `Invalid type: ${metadata.type}. Must be one of: ${TYPES.join(", ")}`
    );
  }
  if (!stringHasText(metadata.slug)) {
    throw new Error("slug must be a string");
  }

  // Check for duplicate slugs
  if (slugs.has(metadata.slug)) {
    throw new Error(
      `Duplicate slug found: ${metadata.slug}. Slugs must be unique across all prompts.`
    );
  }
  slugs.add(metadata.slug);

  // Validate author object
  const author = metadata.author;
  if (typeof author !== "object" || author === null) {
    throw new Error("author must be an object");
  }
  if (!stringHasText(author.name)) {
    throw new Error("author.name must be a string");
  }
}

// Modify the main function to clear the slugs Set before validation
async function main() {
  try {
    // Clear the slugs Set before validation
    slugs.clear();

    await validateDirectory(PROMPTS_DIR);

    console.log("Repository structure validation passed!");
    process.exit(0);
  } catch (error) {
    console.error("Validation failed:", error.message);
    process.exit(1);
  }
}

main();
