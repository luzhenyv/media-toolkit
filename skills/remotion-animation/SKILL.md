---
name: remotion-animation
description: Make short animations and video clips with Remotion (React), producing a hand-editable .tsx source, an MP4, and a cover PNG. Use for markers of type animation, or when the user wants something turned into video.
---

# Remotion animation

File names and markers follow `media-sop`. Colors, fonts, and aspect ratio come from `style.md`.

## Asset file contract

One asset is one `.tsx` file in the content repo's `assets/`. No package.json there; dependencies live in `${CLAUDE_PLUGIN_ROOT}/runtimes/remotion`.

```tsx
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

// ===== Tweakable parameters =====
const LABELS = ["A", "B"];   // text, numbers, colors, timeline (frames) all live here
const T = { in: 0, end: 300 };
// ================================

export const config = { fps: 30, width: 1920, height: 1080, durationInFrames: T.end, cover: T.end - 1 };
export default function Fxx() { const f = useCurrentFrame(); /* ... */ }
```

- `config.cover`: the frame frozen into the same-name PNG (default: last frame). The PNG also serves the article.
- Only import `remotion` and `react`.

## Writing rules

Goal: the user adjusts the parameters block without reading the component or asking the agent.

- Every text, number, color, and time point is in the parameters block with a one-line comment.
- One timeline object `T` (in frames) that all segments reference.
- Draw in a single 1920×1080 `<svg viewBox>`: plain coordinates are easy to hand-tune.
- Fonts from `style.md`; fallback `"PingFang SC", "Noto Sans CJK SC", sans-serif`. Body text at least 28 px.
- Randomness uses a fixed seed so every render is identical.
- Short: one idea per clip, 10–20 seconds.

## Steps

1. Read the marker and surrounding text; check numbers and terms against the article.
2. Write `assets/F##-<name>.tsx`.
3. Render: `"${CLAUDE_PLUGIN_ROOT}/bin/render" assets/F##-<name>.tsx` → same-name `.mp4` + `.png`. First run installs dependencies.
4. Check: extract frames at key moments (`ffmpeg -ss <sec> -i x.mp4 -frames:v 1 y.png`) and Read them: overlaps, hidden text, wrong numbers. Fix and re-render.
5. Set the marker to `draft` and add the embed line: `[![F##](assets/F##-<name>.png)](assets/F##-<name>.mp4)`.
6. Tell the user which parameters they will most likely tweak, and that `preview <file>.tsx` shows live changes.
