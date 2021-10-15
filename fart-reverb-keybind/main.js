const { app, globalShortcut } = require("electron");
const broadcast = require("../../electron/dist/kernel.asar/core/broadcast/index.js");

module.exports.default = {
  start() {
    app.on("ready", () => {
      globalShortcut.register("CommandOrControl+Alt+F", () => {
        broadcast.default.emit("play-fart-sound");
      });
    });
  },

  stop() {
    globalShortcut.unregister("CommandOrControl+Alt+F");
  }
}
