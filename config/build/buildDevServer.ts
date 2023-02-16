import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfigurations } from "webpack-dev-server";

export function buildDevServer({
  port,
}: BuildOptions): DevServerConfigurations {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
}
