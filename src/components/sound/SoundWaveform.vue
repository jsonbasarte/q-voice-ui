<template>
  <div
    :style="{
      display: 'flex',
      backgroundColor: 'red',
    }"
  >
    asdasdasd
    <div id="waveform" ref="waveformRef"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
// import { PlayCircleOutlined } from "@ant-design/icons-vue";
import WaveSurfer from "wavesurfer.js";
// var WaveSurfer = require('wavesurfer.js');

export default defineComponent({
  components: {
    // PlayCircleOutlined,
  },
  setup() {
    const waveformRef = ref<any>();
    onMounted(() => {
      let xhr = {
        cache: "default",
        mode: "cors",
        method: "GET",
        credentials: "same-origin",
        redirect: "follow",
        referrer: "client",
        headers: [{ key: "Authorization", value: "my-token" }],
      };
      // if (waveform) {
      var wavesurfer = WaveSurfer.create({
        container: waveformRef.value,
        xhr: xhr,
      });
      wavesurfer.load(
        "http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
      );
      wavesurfer.on("ready", function () {
        wavesurfer.play();
      });
      wavesurfer.on("error", function (e: any) {
        console.log(e);
      });
      // }
    });
    return {
      waveformRef,
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
