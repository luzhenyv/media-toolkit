---
name: edit-plan
description: Build a timed video edit plan from the recorded voiceover's subtitles, the script, and existing assets, and fill gaps with new visual markers. Use when the user asks for an edit plan, a cut plan, or where visuals go in the video.
---

# Edit plan

Inputs, using the project's file names (`media-sop`):

- `voiceover.srt`: subtitles exported from CapCut after recording. Timing comes only from here; the recording always drifts from the script.
- `voiceover.md` and `article.md`: markers show which visual belongs to which line.
- `assets/`: what already exists.

If there is no `.srt`, ask the user to export one from CapCut. Do not estimate timecodes from the script.

## Steps

1. Align SRT lines to the script to find where each `[F##]` falls. Recordings add, skip, and reword lines; match by meaning, not exact text.
2. Write `edit.md`:

   ```markdown
   | Time | Line (from SRT) | Visual | How | Duration |
   |---|---|---|---|---|
   | 02:14 | "We can put all the transition probabilities in a table" | F03 | full screen | 6s |
   | 02:20 | "…jumping back and forth…" | F04 | picture-in-picture, right | 13s |
   ```

   How: `full screen`, `picture-in-picture`, `overlay`, `split screen`. Only content visuals; subtitles, captions, transitions, and music stay in CapCut.
3. Where the video needs a visual the article does not have (long talking-head stretch, a term that needs showing), add a marker to `edit.md` right under its table row: `> [F## · type · todo] description`, with the next free ID.
4. Summarize: visuals ready, visuals still `todo`, and anything in the recording that differs from the script in facts or numbers.
