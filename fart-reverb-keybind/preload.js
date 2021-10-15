const broadcast = require("../../electron/dist/kernel.asar/core/broadcast");

module.exports.default = {
  start() {
    const fart = new Audio("https://raw.githubusercontent.com/Sepruko/kernel-packages/main/fart-reverb-keybind/assets/fart-reverb.mp3");

    broadcast.default.on("play-fart-sound", () => {
      fart.play();
    });
  }
}
