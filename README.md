# media-toolkit

Claude Code plugin：设计配图，制作**可以手改源文件**的素材。改细节时直接改源文件，再 `render` 一次，不用回头找 AI。

| 目录 | 内容 |
|---|---|
| `skills/` | `plan-visuals` 设计配图清单；`asset-layout` 文件结构规矩；`drawio-diagram` 示意图 |
| `bin/` | `render`：源文件 → 成品 |

## 使用

整台电脑只有这一份代码，不安装、不复制，用 `--plugin-dir` 直接加载。在 `~/.zshrc` 里加：

```sh
alias claude='claude --plugin-dir ~/Steven/project/media-toolkit'
export PATH="$HOME/Steven/project/media-toolkit/bin:$PATH"   # 手动 render 用
```

然后在内容仓库里启动 `claude`，例如："给 EP01 设计配图"、"做 F03"。

- 改 `bin/` 脚本：立即生效。
- 改 `SKILL.md`：新开一个会话生效。

需要 draw.io 桌面版（`/Applications/draw.io.app`）。

## 手动重新导出

```sh
render assets/F03-转移表.drawio   # 生成 assets/F03-转移表.png
```

| 源文件 | 成品 | Skill |
|---|---|---|
| `.drawio` | `.png` | `drawio-diagram` |
