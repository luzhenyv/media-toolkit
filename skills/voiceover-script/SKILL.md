---
name: voiceover-script
description: Rewrite a finished article into a voiceover script for recording, keeping visual markers. Use when the user asks for a voiceover script, a script to record, or teleprompter text.
---

# Voiceover script

Input: the unit's article (usually after a commit marked `final`). Output: `voiceover.md` in the same unit, using the project's file names (`media-sop`). Tone comes from the Voice section of `style.md`.

## Rewriting

- Written for the ear: short sentences, one idea per sentence, spoken connectives.
- Keep every fact, number, and name exactly as in the article. If something must change, list it for the user instead.
- Drop what cannot be heard well: tables, formulas, long lists, citations. Say the conclusion; the visual carries the detail.
- Remove the project's writing-only marks as `style.md` or `CLAUDE.md` specify (e.g. editorial notes).
- Keep visual markers in short form on their own line: `[F03]`. They tell the editor where each visual goes.
- Mark optional passages with `(optional)` so the user can skip them while recording.

## Output

1. Write `voiceover.md`. Put an estimated duration at the top (the speaking rate from `style.md`, else 240 Chinese characters or 150 English words per minute).
2. If `style.md` asks for extra versions (e.g. a short social-media version) or a change list, produce them as it says.
3. On request, a teleprompter version: the same text with markers removed, printed in the reply for pasting into the user's teleprompter tool. Do not save it as a file.
