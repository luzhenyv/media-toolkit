// 让内容仓库里的素材 .tsx 能 import 本目录 node_modules 里的 remotion / react。
import path from "path";
import { Config } from "@remotion/cli/config";

const asset = process.env.ASSET;
if (!asset) throw new Error("需要环境变量 ASSET=素材 .tsx 的绝对路径（用 bin/render 或 bin/preview 调用）");

Config.overrideWebpackConfig((c) => ({
  ...c,
  resolve: {
    ...c.resolve,
    alias: { ...(c.resolve?.alias ?? {}), "@asset": asset },
    modules: [path.join(process.cwd(), "node_modules"), "node_modules"],
  },
}));
