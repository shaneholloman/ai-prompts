const fs = require("fs").promises;
const path = require("path");

const STARTERS_DIR = path.join(__dirname, "..", "src", "starters");
const PROJECTS_DIR = path.join(__dirname, "..", "src", "projects");
const RULES_DIR = path.join(__dirname, "..", "src", "rules");

async function validateDirectory(dirPath, rules) {
  const items = await fs.readdir(dirPath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);

    if (rules.onlyFiles) {
      // For rules directory - only files allowed
      if (item.isDirectory()) {
        throw new Error(`Directory not allowed in ${dirPath}: ${item.name}`);
      }

      // Check file extensions
      if (!item.name.endsWith(".mdc")) {
        throw new Error(
          `Invalid file type in ${dirPath}: ${item.name}. Only .mdc files are allowed.`
        );
      }
    } else {
      // For starters and projects directories
      if (item.isDirectory()) {
        // Check contents of each subdirectory
        const subItems = await fs.readdir(fullPath, { withFileTypes: true });

        // Check for metadata.json
        if (!subItems.some((f) => f.name === "metadata.json")) {
          throw new Error(`Missing metadata.json in ${fullPath}`);
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
            subItem.name !== "metadata.json"
          ) {
            throw new Error(
              `Invalid file type in ${fullPath}: ${subItem.name}. Only .mdc and metadata.json files are allowed.`
            );
          }
        }
      }
    }
  }
}

async function main() {
  try {
    // Validate rules directory - only files, no directories
    await validateDirectory(RULES_DIR, { onlyFiles: true });

    // Validate projects directory - only directories with metadata.json and .mdc files
    await validateDirectory(PROJECTS_DIR, { onlyFiles: false });

    // Validate starters directory - only directories with metadata.json and .mdc files
    await validateDirectory(STARTERS_DIR, { onlyFiles: false });

    console.log("Repository structure validation passed!");
    process.exit(0);
  } catch (error) {
    console.error("Validation failed:", error.message);
    process.exit(1);
  }
}

main();
