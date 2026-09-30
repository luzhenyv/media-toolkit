---
name: video-edit-plan
description: Build a timed video edit plan from the recorded voiceover's subtitles, the script, and existing assets, and fill gaps with new visual markers. Use when the user asks for an edit plan, a cut plan, or where visuals go in the video.
---

# Video edit plan

Inputs, using the project's file names (`media-sop`):

- `voiceover.srt`: subtitle file (SRT format), from the user's video editor or transcription tool. Timing comes only from here; the recording always drifts from the script.
- `voiceover.md` and `article.md`: markers show which visual belongs to which line.
- `assets/`: what already exists.

If there is no `.srt`, ask the user to export one from their video editor or run transcription locally. Do not estimate timecodes from the script.

## Steps

1. Align SRT lines to the script to find where each `[F##]` falls. Recordings add, skip, and reword lines; match by meaning, not exact text.
2. Write `video-edit.md`:

   ```markdown
   | Time | Line (from SRT) | Visual | How | Duration |
   |---|---|---|---|---|
   | 02:14 | "We can put all the transition probabilities in a table" | F03 | full screen | 6s |
   | 02:20 | "…jumping back and forth…" | F04 | picture-in-picture, right | 13s |
   ```

   How: `full screen`, `picture-in-picture`, `overlay`, `split screen`. Only content visuals; subtitles, captions, transitions, and music are added by the user in their video editor.
3. Where the video needs a visual the article does not have (long talking-head stretch, a term that needs showing), add a marker to `video-edit.md` right under its table row: `> [F## · type · todo] description`, with the next free ID.
4. Report to the user:
   - visuals ready (asset files exist);
   - visuals still `todo`, including new ones added in step 3;
   - facts or numbers in the recording that differ from the script (e.g. a misspoken percentage). Ignore wording changes.
