# Contributing

Thanks for your interest in contributing rules or prompts!

## Adding a Starter
- Create a folder under `projects/<your-starter-name>`.
- Add one or more `.mdc` files with your rules.
- For `.mdc` files, please include YAML front-matter:
  ```yaml
  ---
  title: "Descriptive Title"
  description: "Short summary"
  tags: ["tag1", "tag2"]
  ---

- add a metadata.json in that folder.

## Adding a Single Rule

- Put your single `.mdc` file under `rules/`.
- Use front-matter (for .mdc) or define fields in JSON.

## Submit a Pull Request

- Fork the repo, create a branch, add your rule(s), and submit a PR.