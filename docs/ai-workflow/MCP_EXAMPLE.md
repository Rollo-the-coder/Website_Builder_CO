# MCP Example

MCP servers can help Cursor connect to tools such as browsers, databases, issue trackers, observability systems, or provider APIs. This template does not include account-specific MCP configuration.

## Safe Placeholder

```json
{
  "mcpServers": {
    "example-tool": {
      "command": "npx",
      "args": ["-y", "example-mcp-server"]
    }
  }
}
```

Use real MCP config only inside the target project and only after confirming it is safe to commit. Many MCP configs contain account-specific project IDs, local paths, tokens, or service references.

## Rules

- Do not commit secrets.
- Do not commit real access tokens, API keys, webhook secrets, or service role keys.
- Do not invent project refs or credentials.
- Keep `.cursor/mcp.json` ignored unless a project intentionally commits a safe, reviewed config.
- Prefer environment variables or secure local setup for sensitive values.
