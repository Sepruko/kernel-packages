export default {
  start() {
    console.log("Started Fart Reverb Button!");
    const fart = new Audio("https://raw.githubusercontent.com/Sepruko/kernel-packages/main/fart-reverb-button/assets/fart-reverb.mp3");

    kernel.broadcast.on("play-fart-sound", () => {
      fart.play();
    });
  },

  stop() {
    console.log("Stopped Fart Reverb Button!");
  }
}