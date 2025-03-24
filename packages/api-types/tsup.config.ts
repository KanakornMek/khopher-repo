import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/index.ts"],
  sourcemap: true,
  format: ["esm", "cjs"],
  dts: true,
  target: "esnext",
  ...options,
}));
