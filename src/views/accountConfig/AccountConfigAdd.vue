<template>
  <div>
    <div
      :style="{
        background: '#fff',
        padding: '10px',
        textAlign: 'left',
        borderBottom: '1px solid #e9e9e9',
      }"
      @back="() => null"
    >
      <router-link to="/account-config">
        <ArrowLeftOutlined /> Back
      </router-link>
    </div>
    <a-layout style="padding: 20px; background: white">
      <div class="detail-container">
        <div class="detail_header">
          <span class="page-title">Add Account Config</span>
        </div>
        <div style="margin-top: 20px">
          <a-row>
            <a-col :span="12">
              <a-form-item
                label="Account Name"
                style="display: block; text-align: left"
              >
                <input :class="['ant-input']" v-model="accountName" />
              </a-form-item>
              <div style="display: flex; margin-top: 10px">
                <a-button type="primary" class="add_button" @click="saveAccountConfig">
                  <template #icon><PlusCircleOutlined /></template>
                  Create
                </a-button>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ArrowLeftOutlined, PlusCircleOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    ArrowLeftOutlined,
    PlusCircleOutlined,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      accountName: "",
      accountSID: "",
      authToken: "",
      isActive: true,
    });

    const saveAccountConfig = () => {
      if (!state.accountName) return;
      const authToken = localStorage.getItem("fs_auth_token");
      store
        .dispatch("addAccountConfig", {
          accountName: state.accountName,
          authToken,
        })
        .then((res) => {
          if (res.data.Status === 1) {
            router.push({ path: "/account-config" });
          }
        });
      console.log("saveAccountConfig");
    };

    return {
      ...toRefs(state),
      saveAccountConfig,
    };
  },
});
</script>
<style scoped>
.detail_header {
  padding: 10px 10px 5px 0px;
  text-align: left;
  border-bottom: 1px solid #c8c8c8;
}

.detail_item {
  display: flex;
}

.detail_label {
  text-align: left;
  font-weight: 600;
  width: 200px;
  padding: 10px;
}

.detail_value {
  flex: 1;
  text-align: left;
  padding: 10px;
}

.page-title {
  font-size: 1.2em;
  font-weight: 600;
  color: #5e5e5e;
}
.add_button {
  /* color: #57cc99; */
  border-color: #57cc99 !important;
  background-color: #57cc99 !important;
}
</style>
