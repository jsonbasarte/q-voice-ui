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
      <a-typography-title :level="2">Call Logs</a-typography-title>
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
          width: '70%',
        }"
      >
        <a-space direction="horizontal">
          <a-input-search
            v-model:value="value"
            placeholder="Search Call UID"
            enter-button
            style="width: 300px"
            @search="onSearch"
          />
          <a-date-picker
            v-model:value="date1"
            show-time
            type="date"
            placeholder="Date & Time Range"
            style="width: 100%"
          />
          <a-select
            ref="select"
            v-model:value="statusValue"
            style="width: 120px"
            :options="options1"
            @focus="focus"
            @change="handleChange"
          >
          </a-select>
          <a-input v-model:value="fromValue" placeholder="From">
            <template #addonAfter>
              <ExclamationCircleOutlined />
            </template>
          </a-input>
          <a-input v-model:value="toValue" placeholder="To">
            <template #addonAfter>
              <ExclamationCircleOutlined />
            </template>
          </a-input>
        </a-space>
      </div>
      <div
        :style="{
          display: 'flex',
        }"
      >
        <a-space direction="horizontal">
          <a-form-item label="Filter">
            <a-dropdown size="small">
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1"> <PhoneOutlined /> All </a-menu-item>
                  <a-menu-item key="2"> <PhoneOutlined /> Inbound </a-menu-item>
                  <a-menu-item key="3">
                    <PhoneOutlined /> Outbound
                  </a-menu-item>
                </a-menu>
              </template>
              <a-button>
                All
                <FilterOutlined />
              </a-button>
            </a-dropdown>
          </a-form-item>
        </a-space>
      </div>
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
          <a-button type="primary" ghost>
            <template #icon><DownloadOutlined /></template>
            Export CSV
          </a-button>
        </a-space>
      </div>
    </div>
    <a-table
      class="ant-table-striped"
      size="small"
      :columns="CDRColumns"
      :data-source="cdrData"
      :rowClassName="
        (record, index) => (index % 2 === 1 ? 'table-striped' : null)
      "
      style="align-items: center"
    >
      <template #CallDirection="{ text }">
        <a-avatar
          size="large"
          :style="{
            backgroundColor: text == 'Inbound' ? 'green' : 'orange',
            verticalAlign: 'middle',
            fontWeight: 'bold',
          }"
        >
          {{ text == "Inbound" ? "I" : "O" }}
        </a-avatar>
      </template>
      <template
        #CallUIDandDate="{ text, record }"
        @click="viewCallLogsDetails(record)"
      >
        <div>
          <!-- <a>{{ text }}</a> -->
          <a @click="viewCallLogsDetails(record)"
            >{{ text }}0b15d065-f4c2-45e4-b975-9b7fc315d41e</a
          >
        </div>
        <div>
          <CalendarOutlined style="color: grey; margin-right: 5px" />
          <span style="color: grey">{{ record.DateCreated }}</span>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import {
  PhoneOutlined,
  CalendarOutlined,
  FilterOutlined,
  ExclamationCircleOutlined,
  DownloadOutlined,
} from "@ant-design/icons-vue";
import { SelectTypes } from "ant-design-vue/es/select";
import moment, { Moment } from "moment";
import { CDRColumns } from "./helper/helper";
import methodsObj from "./helper/methods";

export default defineComponent({
  components: {
    PhoneOutlined,
    CalendarOutlined,
    FilterOutlined,
    ExclamationCircleOutlined,
    DownloadOutlined,
  },
  setup() {
    const store = useStore();
    const { getCallDetailRecords, viewCallLogsDetails } = methodsObj();
    const cdrData = computed(() => store.getters["getCallDetailRecords"]);
    const options1 = ref<SelectTypes["options"]>([
      {
        value: 1,
        label: "All",
      },
      {
        value: 2,
        label: "Pending",
      },
      {
        value: 3,
        label: "Ongoing",
      },
      {
        value: 4,
        label: "Completed",
      },
    ]);
    const value = ref<string>("");
    const statusValue = ref<any>(1);
    const date1 = ref<Moment>();
    const fromValue = ref<string>("");
    const toValue = ref<string>("");

    const onSearch = (searchValue: string) => {
      console.log("use value", searchValue);
      console.log("or use this.value", value.value);
    };
    const focus = () => {
      console.log("focus");
    };

    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };
    getCallDetailRecords();
    return {
      CDRColumns,
      cdrData,
      value,
      statusValue,
      date1,
      fromValue,
      toValue,
      onSearch,
      focus,
      handleChange,
      options1,
      viewCallLogsDetails,
    };
  },
});
</script>
<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
.call-config {
  text-align: left;
  font-size: 1.5em;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 20px;
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
