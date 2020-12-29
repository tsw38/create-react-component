const merge = require("deepmerge");
const Bundler = require("parcel-bundler");

const isDevMode = process.env.WATCH === "true";

const options = {
  hmr: false,
  hmrPort: 0,
  logLevel: 3,
  cache: false,
  target: "node",
  watch: isDevMode,
  scopeHoist: false,
  sourceMaps: false,
  autoInstall: true,
  minify: !isDevMode,
  contentHash: false,
  detailedReport: true,
  bundleNodeModules: "create-react-component",
};

(async function () {
  await new Bundler(
    "./src/index.js",
    merge(options, { outDir: "./bin", outFile: "cli.js" })
  ).bundle();
})();
