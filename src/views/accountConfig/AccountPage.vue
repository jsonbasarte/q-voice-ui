<template>
  <div>
    <a-row>
      <a-col :span="18" style="background: #3db2ff; height: 100vh">
        <div class="center-logo">
          <transition name="bounce">
            <img v-if="showLogo" src="../../assets/logo-complete2.png" alt="" />
          </transition>
        </div>
      </a-col>
      <a-col :span="6">
        <div style="padding: 20px 15px 15px 15px">
          <router-view></router-view>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const showLogo = ref<boolean>(false);
    setTimeout(() => {
      showLogo.value = true;
    }, 200);

    return {
      showLogo,
    };
  },
});
</script>
<style scoped>
.center-logo {
  width: 640px;
  height: auto;
  margin: 30% auto;
  padding: 10px;
  position: relative;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
