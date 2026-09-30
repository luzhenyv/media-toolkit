// Registers two compositions: main (video) and cover (a still frozen at config.cover).
import React from "react";
import { Composition, Freeze, Still, registerRoot } from "remotion";
// @ts-ignore  alias set in remotion.config.ts, points at the asset file
import Asset, { config } from "@asset";

const c = { fps: 30, width: 1920, height: 1080, durationInFrames: 300, ...config };
const cover = c.cover ?? c.durationInFrames - 1;

const Cover: React.FC = () => (
  <Freeze frame={cover}>
    <Asset />
  </Freeze>
);

const Root: React.FC = () => (
  <>
    <Composition id="main" component={Asset} fps={c.fps} width={c.width} height={c.height} durationInFrames={c.durationInFrames} />
    <Still id="cover" component={Cover} width={c.width} height={c.height} />
  </>
);

registerRoot(Root);
