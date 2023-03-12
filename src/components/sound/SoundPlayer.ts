import { Howl, Howler } from "howler";

const SoundPlayer = (data: any) => {
  var sound = new Howl({
    src: "http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3",
    html5: true, // A live stream can only be played through HTML5 Audio.
    format: ["mp3", "aac"],
  });
  sound.on("end", function () {
    console.log("Finished!");
  });
  sound.once("load", function (e: any) {
    console.log(e);
    sound.play();
  });
};
