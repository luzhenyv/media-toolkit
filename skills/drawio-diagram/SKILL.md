---
name: drawio-diagram
description: Draw static diagrams (tables, state diagrams, flowcharts, relationship maps) in draw.io, producing a hand-editable .drawio source and a PNG. Use for markers of type diagram.
---

# draw.io diagram

File names and markers follow `media-sop`. Colors and fonts come from `style.md`.

## Writing the .drawio file

Goal: the user can open it in draw.io and fix details without asking the agent again.

- Uncompressed XML, so git diffs are readable.
- Canvas 16:9 (1600×900). draw.io crops exports to content, so make the first element a locked white frame:
  `<mxCell id="frame" value="" style="fillColor=#FFFFFF;strokeColor=none;locked=1;" vertex="1" parent="1"><mxGeometry width="1600" height="900" as="geometry"/></mxCell>`
- One element per text or number, so each is editable by double-click. No multi-part HTML labels.
- At most 2–3 colors; same style for same-kind elements, so select-all recoloring works.
- Body text at least 28 px, readable in video.

## Steps

1. Read the marker and surrounding text; check numbers and terms against the article.
2. Write `assets/F##-<name>.drawio`.
3. Export: `"${CLAUDE_PLUGIN_ROOT}/bin/render" assets/F##-<name>.drawio`
4. Read the PNG: overlaps, cut-off text, wrong numbers. Fix the source and re-render.
5. Set the marker to `draft` and add the embed line below it.
6. Tell the user in one or two sentences what they are most likely to tweak and that `render` re-exports.
