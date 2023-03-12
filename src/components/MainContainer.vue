<template>
  <a-layout class="main-container">
    <Header />
    <a-layout>
      <a-layout-sider
        :style="{
          overflow: 'auto',
          height: '100%',
          width: '200',
          backgroundColor: '#FFFFFF',
          left: 0,
          overflow: 'hidden',
        }"
      >
        <SidebarMenu />
      </a-layout-sider>
      <a-layout
        :style="{
          width: '100vh',
        }"
      >
        <a-layout-content
          :style="{
            flex: 1,
            background: '#F7F6F2',
            padding: '10px',
            overflow: 'initial',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          @FTSI
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <div v-if="isConfirmDialogVisible" class="back-drop"></div>
    <ConfirmDailog v-if="isConfirmDialogVisible" />
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ConfirmDailog from "./custom/ConfirmDialog.vue";
import Header from "./Header.vue";
import SidebarMenu from "./SidebarMenu.vue";
export default defineComponent({
  components: {
    ConfirmDailog,
    Header,
    SidebarMenu,
  },
  setup() {
    const store = useStore();
    const isConfirmDialogVisible = computed(
      () => store.getters["getConfirmDialogStatus"]
    );
    return {
      isConfirmDialogVisible,
    };
  },
});
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.menu-style {
  height: 100vh;
}

.back-drop {
  background-color: rgba(19, 15, 64, 0.4);
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 9;
}
.main-container {
  position: relative;
}
</style>
