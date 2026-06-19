# Optional Agent Loop

This workflow is not active by default.

To adopt it intentionally:

1. Copy `optional/agent-loop/agent-loop.mdc` into `.cursor/rules/`.
2. Move or copy `ACTIVE_WORKPLAN.md` and `AGENT_RUN_LOG.md` into the project docs location you want to maintain.
3. Update the copied rule paths if you change where those files live.
4. Fill the workplan with real tasks and verification steps.

The agent-loop workflow requires an active workplan and run log. Do not use it for work involving secrets, production data, real charges, destructive actions, or ambiguous business decisions without explicit human approval.
