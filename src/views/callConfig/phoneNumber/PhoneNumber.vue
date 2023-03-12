<template>
  <div>
    <a-layout style="background: white">
      <div
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          height: '50px',
          borderBottom: '1px solid #e9e9e9',
        }"
      >
        <a-typography-title :level="2">Phone Number Config</a-typography-title>
      </div>
      <div
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          borderBottom: '1px solid #e9e9e9',
        }"
      >
        <div
          :style="{
            display: 'flex',
          }"
        >
          <a-space direction="horizontal"> </a-space>
        </div>
        <div
          :style="{
            display: 'flex',
          }"
        >
          <a-space direction="horizontal">
            <a-button
              ghost
              class="add_button"
              @click="addAccountConfig"
              title="Add Phone Number config"
            >
              <template #icon><PlusSquareFilled /></template>
              Add New
            </a-button>
          </a-space>
        </div>
      </div>
      <a-table
        class="ant-table-striped"
        size="small"
        :columns="columns"
        :dataSource="phoneNumberConfigList"
        :rowClassName="
          (record, index) => (index % 2 === 1 ? 'table-striped' : null)
        "
        style="align-items: center"
      >
        <template #Actions="{ record }">
          <div style="text-align: right">
            <a-button
              size="middle"
              shape="circle"
              class="action_buttons"
              @click="editConfig(record)"
            >
              <template #icon>
                <EditOutlined class="view_icon" title="View Details" />
              </template>
            </a-button>
            <a-button
              size="middle"
              shape="circle"
              class="action_buttons"
              @click="deleteConfig(record)"
            >
              <template #icon>
                <DeleteFilled
                  class="view_icon"
                  style="color: #f86c6b"
                  title="Delete Recording"
                />
              </template>
            </a-button>
          </div>
        </template>
      </a-table>
    </a-layout>
    <a-modal
      v-model:visible="modleVisibility"
      title="Edit Config"
      ok-text="Save"
      @ok="handleOk"
    >
      <a-form-item
        label="Friendly Name"
        style="display: block; text-align: left"
      >
        <input :class="['ant-input']" v-model="selectedConfig.friendlyName" />
      </a-form-item>
      <a-form-item
        label="Phone Number"
        style="display: block; text-align: left"
      >
        <input :class="['ant-input']" v-model="selectedConfig.phoneNumber" />
      </a-form-item>
      <a-form-item label="HTTP Method" style="display: block; text-align: left">
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="setMethodUpdate('POST')">
                HTTP POST
              </a-menu-item>
              <a-menu-item key="2" @click="setMethodUpdate('GET')">
                HTTP GET
              </a-menu-item>
            </a-menu>
          </template>
          <a-button style="width: 100%; text-align: left">
            {{ selectedConfig.httpMethod }}
            <DownOutlined style="float: right; margin-top: 5px" />
          </a-button>
        </a-dropdown>
      </a-form-item>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";
import {
  DownOutlined,
  EditOutlined,
  DeleteFilled,
  PlusSquareFilled,
  // ArrowLeftOutlined,
} from "@ant-design/icons-vue";
import gettersObj from "./helper/getters";
import methodsObj from "./helper/methods";

export default defineComponent({
  components: {
    DownOutlined,
    EditOutlined,
    DeleteFilled,
    PlusSquareFilled,
    // ArrowLeftOutlined,
  },
  setup() {
    const router = useRouter();
    const { phoneNumberConfigList, phoneNumberConfig } = gettersObj();
    const {
      state,
      selectedHttpMethod,
      setMethodUpdate,
      getPhoneNumberConfigs,
      deleteConfig,
      handleOk,
      editConfig,
      isInvalid,
      setMethod,
      saveConfig,
      modleVisibility,
    } = methodsObj();

    getPhoneNumberConfigs();

    const addAccountConfig = () => {
      router.push({ path: "/call-config-new/phone-number/add" });
    };
    return {
      ...toRefs(state),
      selectedHttpMethod,
      phoneNumberConfigList,
      phoneNumberConfig,
      setMethodUpdate,
      getPhoneNumberConfigs,
      deleteConfig,
      handleOk,
      editConfig,
      isInvalid,
      setMethod,
      saveConfig,
      addAccountConfig,
      modleVisibility,
    };
  },
});
</script>
<style scoped>
.call-config {
  text-align: left;
  font-size: 2em;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 20px;
}

.invalid {
  border: 1px solid red;
}
.add_button {
  color: #57cc99;
  border-color: #57cc99;
}
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

.page-title {
  font-size: 1.2em;
  font-weight: 600;
  color: #5e5e5e;
}
</style>
