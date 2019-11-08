let liveServer = require("live-server");

let params = {
  port: 8080, // Set the server port. Defaults to 8080.
  root: "./public", // Set root directory that's being served. Defaults to cwd.
  open: true, // When false, it won't load your browser by default.
  ignore: "node_modules,src", // comma-separated string for paths to ignore
  file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  mount: [["/dist", "./dist"]]
};
liveServer.start(params);
