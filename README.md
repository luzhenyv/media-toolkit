# media-toolkit

Claude Code plugin：设计配图，制作**可以手改源文件**的素材。改细节时直接改源文件，再 `render` 一次，不用回头找 AI。

| 目录 | 内容 |
|---|---|
| `skills/` | `plan-visuals` 设计配图清单；`asset-layout` 文件结构规矩；`drawio-diagram` 示意图；`remotion-animation` 动画；`image-search` 搜图；`ai-image` AI 插画 |
| `bin/` | `render`：源文件 → 成品；`preview`：动画实时预览；`commons`：Wikimedia Commons 搜图下载 |
| `runtimes/remotion/` | 共享的 Remotion 环境，`node_modules` 装在这里（不进 git） |

## 使用

整台电脑只有这一份代码，不安装、不复制，用 `--plugin-dir` 直接加载。在 `~/.zshrc` 里加：

```sh
alias claude='claude --plugin-dir ~/Steven/project/media-toolkit'
export PATH="$HOME/Steven/project/media-toolkit/bin:$PATH"   # 手动 render / preview 用
```

然后在内容仓库里启动 `claude`，例如："给 EP01 设计配图"、"做 F03"。

- 改 `bin/` 脚本：立即生效。
- 改 `SKILL.md`：新开一个会话生效。

需要：draw.io 桌面版（`/Applications/draw.io.app`）；Node.js（动画用，第一次 `render` 会自动 `npm install`，生成的 `package-lock.json` 要提交，用来锁定依赖版本）。

## 手动调整和重新导出

```sh
render assets/F03-转移表.drawio     # → F03-转移表.png
render assets/F04-转移图小球.tsx     # → F04-转移图小球.mp4 + .png（封面）
preview assets/F04-转移图小球.tsx    # 浏览器实时预览，改 .tsx 保存后自动刷新
```

| 源文件 | 成品 | 怎么手改 | Skill |
|---|---|---|---|
| `.drawio` | `.png` | draw.io 打开 | `drawio-diagram` |
| `.tsx` | `.mp4` + `.png` | 改文件顶部"可调参数" | `remotion-animation` |
| `.md`（来源） | 下载的 `.jpg` / `.png` | 不改原图，合成时另做 | `image-search` |
| `.md`（prompt） | `.v1.png` … → `.png` | 改 prompt，自己去生图 | `ai-image` |

## 搜图

```sh
commons search "Andrei Markov" 5
commons get "File:Andrei Markov.jpg" assets/F02-奥涅金计数.肖像.jpg   # 同时写 .md（来源、授权）
```

需要 Python 3（macOS 自带）。AI 生图暂不接 API：Agent 写 prompt，你在 ChatGPT 等工具里生成后存进 `assets/`。
