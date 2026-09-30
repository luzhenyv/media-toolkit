---
name: drawio-diagram
description: 用 draw.io 画静态示意图（表格、状态图、流程图、关系图），产出可手改的 .drawio 源文件和 PNG。配图清单里形式为"示意图""表格"时使用。
---

# draw.io 示意图

文件放在哪、怎么命名、清单怎么更新，按 `asset-layout` Skill。

## 写 .drawio 的要求

目标：用户以后打开 draw.io 就能自己改，不用再找 AI。

- 用未压缩的 XML，方便 git 对比。
- 画布 16:9（1600×900）。draw.io 导出时会裁到内容边界，所以第一个元素放一个锁定的白色画框：
  `<mxCell id="frame" value="" style="fillColor=#FFFFFF;strokeColor=none;locked=1;" vertex="1" parent="1"><mxGeometry width="1600" height="900" as="geometry"/></mxCell>`
- 每段文字、每个数字各占一个元素，双击就能改；不要把多段内容塞进一个 HTML 标签。
- 颜色最多 2–3 种，同类元素用同一个 style，方便用户全选后统一改色。
- 字号：正文不小于 28，视频里也要看得清。

## 步骤

1. 读稿子里对应的配图说明，确认数字和术语与正文一致。
2. 写 `assets/F##-短名.drawio`。
3. 导出：`"${CLAUDE_PLUGIN_ROOT}/bin/render" assets/F##-短名.drawio`
4. 用 Read 查看导出的 PNG：文字是否重叠、数字是否正确。有问题改源文件，重新导出。
5. 交付时用一两句话告诉用户：常改的东西在哪里、改完怎么重新导出。
