# AIPROMPT JSON (aiprompt.json)
- for finalize create the matching aiprompt
- for each rule you have to create an object in this array. dont gather rules in the file option.
- for techstack ONLY add 1 techstack. for example for "nuxt", "react", "next"
- for dev_categories - only allowed is "backend", "frontend", "api", "documentation", "db", "auth"
- for development_process - only ["plan", "design", "implement", "test", "deploy"]
- author is always kevin kern
- slug should always include framework, library and task
- avoid adding redundant infor to tags. for example if we already have somehting in techstack, dev_Categories, development_process then dont add this to tags
- ai editor can be  ["cursor", "vscode", "windsurf", "cline", "bolt.new"] but keep cursor for now
- type = setup for setup- files, type = feature for add-feature, type = rule for rule-*-coding-standards
- service is only interesting for backend services like, neon, supabase, clerk, ...
- if its a library tag them with like drizzle -> orm, pinia -> state, ...
<EXAMPLE_AIPROMPT_JSON>
[
    {
    "name": "<name> (required)",
    "description": "<description> (required)",
    "type": "agent",
    "slug": "<slug> (required)",
    "development_process": ["implement", "test"],
    "dev_categories": ["api", "documentation", "db", "storage", "ui", "ai", "analytics", "frontend", "backend", "performance", "state"],
    "tags": {{INSERT_TAGS}},
    "tech_stack": {
      "framework": "{{INSERT FRAMEWORK}}",
      "service": "{{INSERT SERVICE}}"
    },
    "ai_editor": ["cursor"],
    "author": {
      "name": "Kevin Kern",
      "url": "https://github.com/regenrek",
      "avatar": "https://avatars.githubusercontent.com/u/5182020?v=4"
    },
    "model": ["reasoning", "chat"],
    "version": "1.0",
    "files": ["myrule.md"],
    published: true
  }
]
</EXAMPLE_AIPROMPT_JSON>