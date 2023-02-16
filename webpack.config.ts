import path from "path";
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPath } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 3000;

  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
