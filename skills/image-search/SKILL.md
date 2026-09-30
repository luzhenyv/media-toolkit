---
name: image-search
description: 从 Wikimedia Commons 搜索并下载可用的真实图片（历史人物、书页、手稿、老照片、实物），自动记录来源和授权。配图清单里形式为"实物""照片"，或用户要"找一张…的图"时使用。
---

# 搜索网络图片

文件放在哪、怎么命名，按 `asset-layout` Skill。只用 Wikimedia Commons：授权信息清楚。

## 步骤

1. 搜：`"${CLAUDE_PLUGIN_ROOT}/bin/commons" search "关键词" [数量]`
   - 用英文或原文名（俄文、拉丁文）搜，结果比中文多。
   - 同名人物很常见（例如 Andrei Markov 也是冰球运动员），看作者、年代、描述确认是不是要找的。
2. 挑 1–3 个候选给用户：标题、尺寸、授权、为什么合适。用户选定后再下载。
3. 下：`"${CLAUDE_PLUGIN_ROOT}/bin/commons" get "File:标题" assets/F##-短名.jpg`
   - 会同时写同名 `.md`（来源、作者、授权、署名写法），不要删。
   - 一个镜号要多张原图时，用后缀区分：`F02-奥涅金计数.肖像.jpg`、`F02-奥涅金计数.书页.png`。
4. 用 Read 看一眼下载的图，确认内容对。
5. 在 `配图.md` 的"来源"列写授权简称；需要署名的，写上"需署名"。

## 授权

- `.md` 里"授权分类"有多个时，按最严格的执行。翻拍、扫描件常见：原作公有领域，照片本身是 CC BY-SA。
- CC BY / BY-SA：发布时要署名，署名写法已在 `.md` 里。
- 授权不明或是 fair use 的，不用。
- 需要拼图、加标注时，把下载的原图当素材，用 `drawio-diagram` 或 `remotion-animation` 合成，原图不改。
