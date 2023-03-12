<template>
  <div>
    <a-menu
      mode="inline"
      class="menu-style"
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      :style="{ borderRight: 0 }"
    >
      <a-menu-item
        key="1"
        @click="navigateRoute('/dashboard')"
        style="align-items: center"
      >
        <HomeFilled style="fontsize: 20px" />
        <span style="fontweight: 500">Home</span>
      </a-menu-item>
      <a-menu-item
        key="2"
        @click="navigateRoute('/account-config')"
        style="align-items: center"
      >
        <CalendarFilled style="fontsize: 20px" />
        <span style="fontweight: 500">Account</span>
      </a-menu-item>
      <a-menu-item
        key="3"
        @click="navigateRoute('/call-logs')"
        style="align-items: center"
      >
        <ReadFilled style="fontsize: 20px" />
        <span style="fontweight: 500">Calls</span>
      </a-menu-item>
      <a-menu-item
        key="4"
        @click="navigateRoute('/call-recording')"
        style="align-items: center"
      >
        <PlayCircleFilled style="fontsize: 20px" />
        <span style="fontweight: 500">Recordings</span>
      </a-menu-item>
      <a-menu-item
        key="6"
        @click="navigateRoute('/phone-number')"
        style="align-items: center"
      >
        <NumberOutlined style="fontsize: 20px" />
        <span style="fontweight: 500">Phone Number</span>
      </a-menu-item>
      <a-menu-item
        key="8"
        style="align-items: center"
        @click="navigateRoute('/test-call')"
      >
        <PhoneOutlined style="fontsize: 20px" />
        <span style="fontweight: 500">Test Call</span>
      </a-menu-item>
    </a-menu>
    <a-button
      type="primary"
      @click="toggleCollapsed"
      style="margin-bottom: 16px"
      block
    >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, watch, reactive, toRefs, ref } from "vue";
import {
  NumberOutlined,
  PlayCircleFilled,
  HomeFilled,
  ReadFilled,
  CalendarFilled,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PhoneOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    NumberOutlined,
    PlayCircleFilled,
    HomeFilled,
    ReadFilled,
    CalendarFilled,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PhoneOutlined,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      collapsed: false,
      openKeys: [],
    });
    let selectedKeys = ref<string[]>(["1"]);
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : [];
    };
    const navigateRoute = (path: string) => {
      router.push({ path });
    };
    navigateRoute("/dashboard");
    window.onhashchange = function () {
      console.log("location: ", window.location);
    };
    watch(router.currentRoute, (val) => {
      if (val.path === "/dashboard") {
        selectedKeys.value[0] = "1";
      }
    });
    return {
      ...toRefs(state),
      selectedKeys,
      toggleCollapsed,
      navigateRoute,
    };
  },
});
</script>
