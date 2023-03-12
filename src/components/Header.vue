<template>
  <a-layout-header
    class="header"
    style="
      padding-left: 8px;
      font-size: 2em;
      display: flex;
      background: #3db2ff;
    "
  >
    <div class="logo" style="text-align: left; flex: 1; align-items: center">
      <a-space
        direction="horizontal"
        style="text-align: left; flex: 1; align-items: center"
      >
        <img src="../assets/logo-complete2.png" style="width: 150px" />
        <!-- <a-typography-title :level="4" style="color: #ffffff; margin-bottom: 0 !important;">
          | HOUSTON FORD
        </a-typography-title> -->
      </a-space>
    </div>
    <div class="user-icon" style="flex: 1; font-size: 0.6em; text-align: right">
      <div style="display: flex; justify-content: flex-end">
        <div class="user">
          <a-space direction="horizontal">
            <UserOutlined v-if="!usernameInitial" style="color: #fff" />
            <a-avatar
              size="middle"
              :style="{
                backgroundColor: avatarColor,
                verticalAlign: 'middle',
                fontWeight: 'bold',
              }"
              v-else
            >
              {{ usernameInitial }}
            </a-avatar>
            <a-dropdown>
              <a
                class="ant-dropdown-link"
                @click.prevent
                style="color: #fff; font-weight: 600"
              >
                {{ username }}
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="signOut">Sign out</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-space>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { DownOutlined, UserOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    DownOutlined,
    UserOutlined,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const username = ref<string>("");
    const usernameInitial = ref<string>("");
    const avatarColor = ref<string>("#FFFFFF");
    const resetUserInfo = () => {
      localStorage.removeItem("fs_user_key");
      localStorage.removeItem("fs_username");
      localStorage.removeItem("fs_auth_token");
    };
    const navigateRoute = (path: string) => {
      router.push({ path });
    };
    const signOut = (): void => {
      const authToken = localStorage.getItem("fs_auth_token");
      console.log("signOut: ", authToken);
      store.dispatch("logoutUser", { authToken }).then(() => {
        resetUserInfo();
        navigateRoute("/account/login");
      });
    };
    const generateRandomColor = () => {
      avatarColor.value = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    };
    const setUserInitial = () => {
      let retrievedUser = localStorage.getItem("fs_username") || "Jason B";
      let newUsernameInitial = null;
      if (retrievedUser) {
        username.value = retrievedUser;
        var matches = retrievedUser.match(/\b(\w)/g);
        if (matches && matches.length > 1) {
          if (matches.length == 2) {
            newUsernameInitial = matches.join("");
          } else {
            let firstInitial = matches[0];
            let lastInitial = matches[matches.length - 1];
            newUsernameInitial = `${firstInitial}${lastInitial}`;
          }
        } else {
          var strUsername = retrievedUser ? retrievedUser.substring(0, 2) : "";
          newUsernameInitial = strUsername;
        }
        newUsernameInitial = newUsernameInitial.toUpperCase();
        usernameInitial.value = newUsernameInitial;
        generateRandomColor();
      }
    };
    setUserInitial();
    window.addEventListener("popstate", () => {
      signOut();
    });

    return {
      username,
      usernameInitial,
      avatarColor,
      setUserInitial,
      resetUserInfo,
      signOut,
    };
  },
});
</script>
