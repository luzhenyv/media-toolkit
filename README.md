# media-toolkit

给自媒体内容做素材的小工具箱。Agent（Claude Code / Codex）查 Skill、调用工具，产出**可以手改的源文件**和成品。改细节时直接改源文件，再 `render` 一次，不用回头找 AI。

- `bin/`：小工具，每个只做一件事，也能自己在终端里用。
- `skills/`：做法，一个效果一个目录（`SKILL.md`）。

原则：够用就行。新工具、新 Skill 等真的用到了再加。

## 安装

```sh
# 把 render 加进 PATH（写进 ~/.zshrc）
export PATH="$HOME/Steven/project/media-toolkit/bin:$PATH"

# 让 Claude Code / Codex 都能找到 skills
mkdir -p ~/.claude/skills ~/.codex/skills
for s in ~/Steven/project/media-toolkit/skills/*/; do
  ln -sfn "$s" ~/.claude/skills/; ln -sfn "$s" ~/.codex/skills/
done
```

需要 draw.io 桌面版（`/Applications/draw.io.app`）。

## 用法

```sh
render figures/F03-转移表.drawio   # 生成 figures/F03-转移表.png
```

| 源文件 | 成品 | Skill |
|---|---|---|
| `.drawio` | `.png` | `drawio-diagram` |
