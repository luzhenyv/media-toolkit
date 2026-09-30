# media-toolkit development notes

This is a Claude Code plugin. Content does not live here; it lives in content repos.

- Everything in this repo is English: skills, prompts, file names, comments, messages, commits.
- Keep it small: a few lines of shell before Python; extend an existing tool before adding one.
- One copy per machine; dependencies install inside this repo (`runtimes/*/node_modules`), not committed.
- Tools (`bin/`): files in, files out, no agent needed, usable by hand. Locate dependencies relative to the script.
- Rules for projects, units, assets, and markers are defined once, in `skills/media-sop`. Other skills reference it.
- A new source format means updating `bin/render` and the README table together.
