<template>
  <a-button
    size="middle"
    shape="circle"
    :loading="iconLoading"
    class="action_buttons"
    @click="playSound"
  >
    <template #icon>
      <PlayCircleOutlined class="view_icon" title="Play Recording" />
    </template>
  </a-button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { PlayCircleOutlined } from "@ant-design/icons-vue";
import { Howl, Howler } from "howler";

interface DelayLoading {
  delay: number;
}
export default defineComponent({
  components: {
    PlayCircleOutlined,
  },
  setup() {
    const iconLoading = ref<boolean | DelayLoading>(false);
      const isPlaying = ref<boolean>(false);
    var sound = new Howl({
      src: "http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3",
      html5: true, // A live stream can only be played through HTML5 Audio.
      format: ["mp3", "aac"],
    });
    sound.on("end", function () {
      console.log("Finished!");
    });
    sound.once("load", function (e: any) {
      console.log(e)
      // sound.stop();
    });
    const playSound = () => {
      console.log(sound);
      iconLoading.value = { delay: 1000 };
      setTimeout(() => {
        iconLoading.value = false;
      }, 6000);
      sound.play();
    };

    return {
      iconLoading,
      playSound,
    };
  },
});
</script>
<style scoped>
.action_buttons {
  border-width: 0;
  margin-left: 5px;
  margin-right: 5px;
}
.view_icon {
  font-size: 1.4em;
  color: #3d56b2;
  cursor: pointer;
}
.view_icon:hover {
  transform: scale(1.5);
}
</style>
