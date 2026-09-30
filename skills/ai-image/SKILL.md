---
name: ai-image
description: Write prompts for AI illustrations and manage generated candidates and the chosen version. The user generates images in ChatGPT, Midjourney, etc.; this skill calls no image API. Use for markers of type illustration.
---

# AI illustration

File names and markers follow `media-sop`.

An AI image has no renderable source, so **the prompt is the source**, kept in a same-name `.md`:

```text
assets/
├── F13-chinese-room.md      # prompt + log (source)
├── F13-chinese-room.v1.png  # candidates the user generated
├── F13-chinese-room.v2.png
└── F13-chinese-room.png     # the chosen one (copied from a v#)
```

## Steps

1. Read the marker and surrounding text. Take the illustration style from `style.md`; if another illustration in the project already has a `.md`, reuse its Style section so the series stays consistent.
2. Write `F##-<name>.md`:

   ```markdown
   # F13-chinese-room

   ## Scene
   What the image must convey, in the project's language.

   ## Style
   (from style.md)

   ## Prompt
   (English, ready to paste; include the aspect ratio, e.g. 16:9)

   ## Log
   - v1: ChatGPT, 2026-10-01. Door slot too small.
   - Chosen: v2
   ```

3. Tell the user: paste the Prompt into their image tool and save results as `F##-<name>.v1.png`, `v2`, … in `assets/`.
4. When candidates arrive, Read them, compare against Scene, suggest a pick or a prompt change, and log the conclusion.
5. Once chosen, copy it to `F##-<name>.png`, log `Chosen: v#`, set the marker to `draft`, and add the embed line.

## Prompt rules

- No text in the image: AI renders CJK text badly. Add text later in draw.io or CapCut.
- State the aspect ratio: video 16:9, Xiaohongshu 3:4 (or as `style.md` says).
- Describe what is visible, not the abstract idea ("a note slid under a door", not "the Chinese Room argument").
