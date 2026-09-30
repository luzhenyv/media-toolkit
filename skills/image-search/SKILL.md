---
name: image-search
description: Search and download real images (historical people, book pages, manuscripts, old photos, objects) from Wikimedia Commons, recording source and license automatically. Use for markers of type photo, or when the user asks to find an image of something.
---

# Image search

File names and markers follow `media-sop`. Wikimedia Commons only: its licensing is explicit.

## Steps

1. Search: `"${CLAUDE_PLUGIN_ROOT}/bin/commons" search "<query>" [count]`
   - Query in English or the original language (Russian, Latin, …); Chinese queries return little.
   - Same-name people are common (Andrei Markov is also a hockey player). Check author, date, and description.
2. Offer 1–3 candidates: title, size, license, why it fits. Download after the user picks.
3. Download: `"${CLAUDE_PLUGIN_ROOT}/bin/commons" get "File:<title>" assets/F##-<name>.jpg`
   - Also writes a same-name `.md` with source, author, license, and attribution. Keep it.
   - Several originals under one ID: `F02-onegin.portrait.jpg`, `F02-onegin.page.png`.
4. Read the image to confirm its content.
5. If the image is the final visual, set the marker to `draft` and add the embed line. If it is raw material for a composite, leave the marker at `todo` and note it.

## Licenses

- If the `.md` lists several license categories, follow the strictest. Common for scans: the work is public domain, the photo is CC BY-SA.
- CC BY / BY-SA: credit is required when publishing; the credit line is in the `.md`.
- Unknown license or fair use: do not use.
- Composites and annotations: treat downloads as inputs to `drawio-diagram` or `remotion-animation`. Never edit the original.
