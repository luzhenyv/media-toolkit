---
name: remotion-animation
description: 用 Remotion（React）做短动画/视频素材，产出可手改的 .tsx 源文件、MP4 和封面 PNG。配图清单里形式为"动画""流程动画"，或用户要"做成视频"时使用。
---

# Remotion 动画

文件放在哪、怎么命名、清单怎么更新，按 `asset-layout` Skill。
范例：ai-documents 的 `series/EP01-接龙机器/assets/F04-转移图小球.tsx`，新动画可以照它的结构写。

## 素材文件的约定

一个素材就是一个 `.tsx` 文件，放在内容仓库的 `assets/` 下，不需要 package.json（依赖在 `${CLAUDE_PLUGIN_ROOT}/runtimes/remotion`）。

```tsx
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

// ===== 可调参数 =====
const LABELS = ["元音", "辅音"];   // 文字、数字、颜色、时间轴（帧）都放这里
const T = { in: 0, end: 300 };
// ====================

export const config = { fps: 30, width: 1920, height: 1080, durationInFrames: T.end, cover: T.end - 1 };
export default function Fxx() { const f = useCurrentFrame(); /* ... */ }
```

- `config.cover`：封面定格在哪一帧（默认最后一帧），导出为同名 PNG，也用于文章。
- 只能 import `remotion` 和 `react`。

## 写法要求

目标：用户改顶部的参数就能调整，不用读懂整个组件，也不用再找 AI。

- 所有文字、数字、颜色、时间点都在"可调参数"区，并写一句中文注释。
- 时间轴集中在一个 `T` 对象里（单位：帧），各段动画都引用它。
- 用一个 1920×1080 的 `<svg viewBox>` 画，坐标直观，方便手调。
- 字体：`"PingFang SC", "Noto Sans CJK SC", sans-serif`；正文不小于 28。
- 随机效果用固定种子，保证每次导出一样。
- 短：一个概念一段动画，10–20 秒。

## 步骤

1. 读稿子里对应的配图说明，确认数字和术语与正文一致。
2. 写 `assets/F##-短名.tsx`。
3. 导出：`"${CLAUDE_PLUGIN_ROOT}/bin/render" assets/F##-短名.tsx` → 同名 `.mp4` + `.png`。首次运行会自动 `npm install`。
4. 自查：用 ffmpeg 在关键时间点抽几帧（`ffmpeg -ss 秒 -i x.mp4 -frames:v 1 y.png`），用 Read 查看：文字是否重叠、被遮挡，数字是否正确。有问题改源文件，重新导出。
5. 交付时告诉用户：常改的参数有哪些；可以用 `preview 文件.tsx` 打开实时预览，改完 `render` 导出。
