<template>
  <div>
    <a-page-header
      :style="{
        background: '#fff',
        padding: '0px 10px 10px 10px',
        textAlign: 'left',
        marginBottom: '5px',
      }"
      @back="() => null"
    >
      <a-button type="link" @click="$router.go(-1)">
        <ArrowLeftOutlined /> Back
      </a-button>
    </a-page-header>
    <a-layout style="padding: 20px; background: white">
      <div class="detail_container">
        <div class="detail_header">
          <div style="flex: 1">
            <a-typography-title :level="4"
              >Add Phone Number Config</a-typography-title
            >
          </div>
        </div>
      </div>
      <div style="margin-top: 10px">
        <div style="padding: 20px; background: white">
          <!-- <div class="call-config">Phone Number Config</div> -->
          <a-alert
            v-if="isSaved && !hasError"
            message="Successfully saved"
            type="success"
            style="text-align: left; margin-bottom: 5px"
          />
          <a-aler
            v-if="isServerError"
            message="Error"
            type="error"
            style="text-align: left; margin-bottom: 5px"
          />
          <a-row>
            <a-col :span="12">
              <a-form-item
                label="Account Id"
                style="display: block; text-align: left"
              >
                <input
                  :class="['ant-input', isInvalid(accountId)]"
                  v-model="accountId"
                />
              </a-form-item>
              <a-form-item
                label="Friendly Name"
                style="display: block; text-align: left"
              >
                <input
                  :class="['ant-input', isInvalid(friendlyName)]"
                  v-model="friendlyName"
                />
              </a-form-item>
              <a-form-item
                label="Phone Number"
                style="display: block; text-align: left"
              >
                <!-- <a-input-number v-model="phoneNumber" style="width: 100%" /> -->
                <input
                  :class="['ant-input', isInvalid(phoneNumber)]"
                  v-model="phoneNumber"
                />
              </a-form-item>
              <a-form-item
                label="HTTP Method"
                style="display: block; text-align: left"
              >
                <a-dropdown>
                  <template #overlay>
                    <a-menu>
                      <a-menu-item key="1" @click="setMethod('POST')">
                        HTTP POST
                      </a-menu-item>
                      <a-menu-item key="2" @click="setMethod('GET')">
                        HTTP GET
                      </a-menu-item>
                    </a-menu>
                  </template>
                  <a-button style="width: 100%; text-align: left">
                    {{ selectedHttpMethod }}
                    <DownOutlined style="float: right; margin-top: 5px" />
                  </a-button>
                </a-dropdown>
              </a-form-item>
              <a-form-item style="text-align: left">
                <a-button type="primary" class="add_button" @click="saveConfig">
                  Create
                </a-button>
              </a-form-item>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { DownOutlined, ArrowLeftOutlined } from "@ant-design/icons-vue";
import gettersObj from "./helper/getters";
import methodsObj from "./helper/methods";

export default defineComponent({
  components: {
    DownOutlined,
    ArrowLeftOutlined,
  },
  setup() {
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
    } = methodsObj();

    getPhoneNumberConfigs();

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
    };
  },
});
</script>
<style scoped>
.detail_header {
  display: flex;
  padding: 15px 10px 5px 0px;
  text-align: left;
  font-size: 1.2em;
  font-weight: 600;
  color: #5e5e5e;
  border-bottom: 1px solid #c8c8c8;
}
.add_button {
  /* color: #57cc99; */
  border-color: #57cc99 !important;
  background-color: #57cc99 !important;
}
</style>
