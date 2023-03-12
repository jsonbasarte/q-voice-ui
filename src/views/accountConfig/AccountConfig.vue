<template>
  <div :style="{ background: '#fff' }">
    <div
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        height: '50px',
        borderBottom: '1px solid #e9e9e9',
      }"
    >
      <a-typography-title :level="2">Accounts</a-typography-title>
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
            title="Add Account Config"
            @click="addAccountConfig"
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
      :columns="ACColumns"
      :dataSource="accountConfigs"
      :rowClassName="
        (record, index) => (index % 2 === 1 ? 'table-striped' : null)
      "
      style="align-items: center"
    >
      <template #Status="{ record }">
        <div style="align-items: center; justify-content: center">
          <CheckCircleOutlined
            v-if="record.isActive"
            style="color: #57cc99; font-size: 25px"
            title="Active"
          />
          <CloseOutlined
            v-else
            style="color: #ff6358; font-size: 25px"
            title="Inactive"
          />
        </div>
      </template>
      <template #DateCreated="{}">
        <div>
          <CalendarOutlined style="color: grey; margin-right: 5px" />
          <span style="color: grey">2021-09-19</span>
        </div>
      </template>
      <template #Actions="{ record }">
        <div style="align-items: center">
          <a-button
            size="middle"
            shape="circle"
            class="action_buttons"
            @click="viewAccountDetails(record)"
          >
            <template #icon>
              <MenuFoldOutlined class="view_icon" title="View Details" />
            </template>
          </a-button>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {
  MenuFoldOutlined,
  PlusSquareFilled,
  CloseOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons-vue";
import { AccountConfigItem } from "../../types/accountConfig";
import { ACColumns } from "./helper/helper";
import methodsObj from "./helper/methods";
export default defineComponent({
  components: {
    MenuFoldOutlined,
    PlusSquareFilled,
    CloseOutlined,
    CheckCircleOutlined,
    CalendarOutlined,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      acountName: "",
      accountSID: "",
      authKey: "",
      dateCreated: "",
      isActive: false,
      hasError: false,
    });
    const { getAccountConfigs, viewAccountDetails } = methodsObj();
    const accountConfigs = computed(
      (): AccountConfigItem[] => store.getters["getAccountConfigs"]
    );
    const saveAccountConfig = () => {
      store.dispatch("addAccountConfig");
    };
    const addAccountConfig = () => {
      router.push({ path: "/account-config/add" });
    };
    // const isInvalid = (value: string): string => !value && state.hasError ? "invalid" : "";
    const isInvalid = () => "";

    getAccountConfigs();
    return {
      ...toRefs(state),
      ACColumns,
      getAccountConfigs,
      viewAccountDetails,
      isInvalid,
      saveAccountConfig,
      accountConfigs,
      addAccountConfig,
    };
  },
});
</script>
<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
.account-config {
  text-align: left;
  font-size: 1.5em;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 20px;
}

.invalid {
  border: 1px solid red;
}
.add_button {
  color: #57cc99;
  border-color: #57cc99 !important;
}
.action_buttons {
  border-width: 0;
  margin-left: 5px;
  margin-right: 5px;
}
.view_icon {
  font-size: 1.4em;
  color: #3d56b2;
}

.view_icon:hover {
  transform: scale(1.5);
}

.page-title {
  font-size: 1.2em;
  font-weight: 600;
  color: #5e5e5e;
}
.actions {
  cursor: pointer;
}
</style>
