// Lets asset .tsx files in content repos import remotion / react from this directory's node_modules.
import path from "path";
import { Config } from "@remotion/cli/config";

const asset = process.env.ASSET;
if (!asset) throw new Error("ASSET must be the absolute path of an asset .tsx (run via bin/render or bin/preview)");

Config.overrideWebpackConfig((c) => ({
  ...c,
  resolve: {
    ...c.resolve,
    alias: { ...(c.resolve?.alias ?? {}), "@asset": asset },
    modules: [path.join(process.cwd(), "node_modules"), "node_modules"],
  },
}));
