# media-toolkit 开发说明

这是一个 Claude Code plugin。内容不放这里，放在 ai-documents 等内容仓库。

- 规模越小越好：能用几行 shell 就不写 Python，能改现有工具就不加新工具。
- 整台电脑只有这一份代码；依赖装在本仓库里（如 `runtimes/*/node_modules`），不提交。
- 工具（`bin/`）：文件进、文件出，不依赖 Agent，自己在终端里也能用。脚本用自身位置定位依赖。
- 素材的文件结构只在 `skills/asset-layout` 里定义一次，其他 Skill 引用它。
- 新增一种源文件格式时，同时更新 `bin/render` 和 README 里的表。
