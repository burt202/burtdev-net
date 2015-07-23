({
  mainConfigFile: "../js/config.js",
  baseUrl: "../bower_components",
  name: "../js/start",
  out: "../../dist/combined.js",
  wrapShim: true,
  include: [
    "requirejs/require"
  ],
  onBuildRead: function (moduleName, path, contents) {
    return contents.replace(/text!templates\/projects\/content.html/g, "text!templates/projects/content.build.html");
  }
})
