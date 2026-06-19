# Graphify Setup

This optional workflow is not active by default.

To adopt it intentionally:

1. Install and configure Graphify for the target project.
2. Generate the project graph according to that tool's documentation.
3. Keep graph output ignored unless the project deliberately commits safe generated artifacts.
4. Copy `optional/graphify/graphify.mdc` into `.cursor/rules/` only after setup is complete.
5. Update the rule if your graph output paths differ.

Graphify should not be assumed for every project. Do not commit graph output containing private code maps, secrets, or client-sensitive data unless reviewed and approved.
