/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
// export default {
  future: {
     // unstable_dev: true
  },
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  // serverModuleFormat: "esm",
  serverDependenciesToBundle: [
    /^html-void-elements$/,
    /^zwitch$/,
    /^web-namespaces$/,
    /^stringify-entities$/,
    /^ccount$/,
    /^rehype.*/,
    /^unified.*/,
    /^remark-parse$/,
    /^remark-rehype$/,
    /^remark-mermaid-plugin$/,
    /^remark-gfm$/,
    /^markdown-table$/,
    /^unist.*/,
    /^hast.*/,
    /^bail.*/,
    /^trough.*/,
    /^mdast.*/,
    /^micromark.*/,
    /^decode.*/,
    /^character.*/,
    /^property.*/,
    /^space.*/,
    /^comma.*/,
    /^trim-lines.*/,
    /^react-markdown$/,
    /^vfile.*/,
    /^strip-markdown$/,
    /^remark$/,
    /^remark-stringify$/,
    /^longest-streak$/,
  ]
}
