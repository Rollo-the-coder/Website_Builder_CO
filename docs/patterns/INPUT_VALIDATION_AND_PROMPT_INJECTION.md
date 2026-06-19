# Input Validation And Prompt Injection

Validate all external input at server boundaries. Treat AI-related content as untrusted data, not instructions.

## Input Validation

- Validate at every server boundary (API routes, server actions, webhooks, form handlers).
- Prefer schema validation (Zod or equivalent).
- Trim strings and enforce max lengths.
- Enforce allowed enum values and reject unexpected fields when appropriate.
- Reject oversized payloads and unsupported content types.
- Sanitize content that will be rendered as HTML or Markdown.
- Never trust client-side validation alone.

## Prompt Injection / AI Endpoints

- Treat user content, scraped content, and external/retrieved content as untrusted data.
- Wrap user-supplied content in clear delimiters.
- Separate system instructions, developer instructions, retrieved content, and user content.
- Do not allow user input to modify system or developer instructions.
- Validate model outputs before sending them to downstream tools, databases, or renderers.
- Limit tool permissions and scope agent actions to least privilege.
- Use least-privilege API keys scoped to the minimum required operations.
- Do not expose AI provider keys to the client.
- Add usage limits, logging, and cost visibility.
- Consider an AI kill switch such as `AI_FEATURES_ENABLED=false`.
- Never allow AI output to directly execute privileged operations without validation and explicit server-side authorization.

## Examples Of Unsafe Patterns

- Passing raw user text into SQL, shell commands, or `eval`.
- Rendering model output as HTML without sanitization.
- Letting retrieved web pages or PDFs override system prompts.
- Exposing `OPENAI_API_KEY` or similar in client bundles or public env vars.

## Related Docs

- `SECURITY_AND_PRIVACY_BASELINE.md`
- `RATE_LIMITING_AND_ABUSE_PREVENTION.md`
- `docs/project/SECURITY_REVIEW.md`
