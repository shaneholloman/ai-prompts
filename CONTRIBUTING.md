# Contributing

Thanks for your interest in contributing prompts!

## Adding a Prompt
- Create a folder under `prompts/<your-starter-name>`.
- Add a aiprompt.json file.
  ```json
  {
    "name": "<name> (required)",
    "description": "<description> (required)",
    "type": "project (required)",
    "slug": "<slug> (required)",
    "author": {
      "name": "<name> (required)",
      "url": "<url> (optional)",
      "avatar": "<url> (optional)"
    }
  }
  ```
- Add one or more `.mdc` files with your rules.
- For `.mdc` files, please include YAML front-matter. Here an example:
  ```yaml
  ---
  description: "Short summary"
  globs: "*.ts,*.js,*.jsx,*.tsx"
  ---

## Submit a Pull Request

- Fork the repo, create a branch, add your rule(s), and submit a PR.