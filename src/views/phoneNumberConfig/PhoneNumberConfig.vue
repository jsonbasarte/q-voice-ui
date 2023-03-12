<template>
  <a-layout>
    <!-- <a-layout style="padding: 24px 24px 24px">
      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '280px',
        }"
      > -->
    <!-- <a-row>
          <a-col> -->
 
    <!-- </a-layout-content>
    </a-layout> -->
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { DownOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";
import gettersObj from "./helper/getters";
import methodsObj from "./helper/methods";

export default defineComponent({
  components: {
    DownOutlined,
    EditOutlined,
    DeleteOutlined,
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
.call-config {
  text-align: left;
  font-size: 2em;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 20px;
}
.invalid {
  border: 1px solid red;
}
</style>
