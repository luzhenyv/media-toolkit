---
name: plan-visuals
description: Read an article or script and plan its visuals by inserting or updating visual markers in place. Plans only; does not produce assets. Use when the user asks to plan visuals, design illustrations, or asks which images a piece needs.
---

# Plan visuals

Marker format and file names follow `media-sop`. Read the project `CLAUDE.md` and `style.md` first.

## Steps

1. Find what changed. If a commit message contains `final` for this unit, read `git diff <that commit> -- <article>` and plan only the changed parts. Otherwise plan the whole article.
2. For each place that needs a visual, ask: what does the reader or viewer need to see here to understand it faster?
3. Insert a marker line after the paragraph it belongs to: `> [F## · type · todo] description`. New IDs continue from the highest existing ID in the unit.
4. Existing markers: keep `draft` and `final` ones as they are. If the text around a marker changed, update its description and tell the user. If a visual is no longer needed, set it to `dropped`.
5. Reply with a short table: ID, type, one-line description, suggested skill.

## Judgment

- Fewer is better: one visual per idea; none for spoken transitions.
- Pick the simplest form that works: static before animation, diagram before AI illustration, real historical images (people, pages, manuscripts) before AI.
- Type → skill: `diagram` → `drawio-diagram`; `animation` → `remotion-animation`; `photo` → `image-search`; `illustration` → `ai-image`; `screen` → the user records it.
- Write descriptions concrete enough to build from: elements, numbers, what changes into what.
- Never change prose. Only marker lines.
