---
name: drawio-diagram
description: 用 draw.io 画静态示意图（表格、状态图、流程图、关系图），产出可手改的 .drawio 源文件和 PNG。用户要配图、示意图、转移图、流程图时使用。
---

# draw.io 示意图

## 产出

源文件和成品同名、同目录：`F03-转移表.drawio` → `F03-转移表.png`。
文件名和存放位置按所在项目的规矩（例如 ai-documents 的 `SOP-配图.md`）。

## 写 .drawio 的要求

目的是让用户以后打开 draw.io 就能自己改，不用再找 AI。

- 用未压缩的 XML，方便 git 对比。
- 画布 16:9（1600×900）。draw.io 导出时会裁到内容边界，所以第一个元素放一个锁定的白色画框：
  `<mxCell id="frame" value="" style="fillColor=#FFFFFF;strokeColor=none;locked=1;" vertex="1" parent="1"><mxGeometry width="1600" height="900" as="geometry"/></mxCell>`
- 每段文字、每个数字各占一个元素，双击就能改；不要把多段内容塞进一个 HTML 标签。
- 颜色最多 2–3 种，同类元素用同一个 style，方便用户全选后统一改色。
- 字号：正文不小于 28，视频里也要看得清。

## 步骤

1. 读稿子里对应的配图说明，确认数字和术语与正文一致。
2. 写 `.drawio`。
3. 运行 `render 文件.drawio`（`render` 在 media-toolkit/bin/ 下）。
4. 打开导出的 PNG 自查：文字是否重叠、数字是否正确。
5. 交付时用一两句话告诉用户：常改的东西在哪里、改完怎么重新导出。
