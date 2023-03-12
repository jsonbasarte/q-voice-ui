<template>
  <div style="background: #fff">
    <div
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        height: '50px',
        borderBottom: '1px solid #e9e9e9',
      }"
    >
      <a-typography-title :level="2">Call Recordings</a-typography-title>
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
            placeholder="Search Recording UUID"
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
    <a-layout>
      <a-modal v-model:visible="visible" @ok="handleOk">
        <template #title>
          <div style="text-align: left; font-size: 0.9em">
            Recording UUID: 0b15d065-f4c2-45e4-b975-9b7fc315d41e
          </div>
        </template>
        <template #footer>
          <div></div>
          <!-- <a-button key="back" @click="handleCancel">Cancel</a-button> -->
        </template>
        <div>
          <PlayCircleOutlined style="font-size: 2em; color: #2db7f5" />
        </div>
      </a-modal>
      <a-table
        class="ant-table-striped"
        size="small"
        :columns="CRColumns"
        :data-source="recordingsData"
        :rowClassName="
          (record, index) => (index % 2 === 1 ? 'table-striped' : null)
        "
        style="align-items: center"
      >
        <template
          #RecordingUUID="{ index, record }"
          @click="viewRecordingDetails(record)"
        >
          <div>
            <!-- <a>{{ text }}</a> -->
            <a @click="viewRecordingDetails(record)"
              >{{ index }}Re2fsdfaedas4523asdsdgf</a
            >
          </div>
          <div>
            <CalendarOutlined style="color: grey; margin-right: 5px" />
            <span style="color: grey">{{ record.DateCreated }}</span>
          </div>
        </template>
        <template
          #CallUIDandDate="{ index, record }"
          @click="viewCallLogsDetails(record)"
        >
          <div>
            <PhoneFilled style="color: grey; margin-right: 5px" />
            <a @click="viewCallLogsDetails(record)"
              >{{ index }}0b15d065-f4c2-45e4-b975-9b7fc315d41e</a
            >
          </div>
          <div>
            <CalendarOutlined style="color: grey; margin-right: 5px" />
            <span style="color: grey">{{ record.DateCreated }}</span>
          </div>
        </template>
        <template #Actions="{ record }">
          <div style="align-items: center">
            <a-button
              size="middle"
              shape="circle"
              class="action_buttons"
              @click="viewRecordingDetails(record)"
            >
              <template #icon>
                <MenuFoldOutlined class="view_icon" title="View Details" />
              </template>
            </a-button>
            <SoundPlayerList />
            <a-button
              size="middle"
              shape="circle"
              class="action_buttons"
              @click="deleteRecording(record)"
            >
              <template #icon>
                <DeleteFilled
                  class="view_icon"
                  style="color: #f86c6b"
                  title="Delete Recording"
                />
              </template>
            </a-button>
            <a-button size="middle" shape="circle" class="action_buttons">
              <template #icon>
                <DownloadOutlined
                  class="view_icon"
                  title="Download Recording"
                />
              </template>
            </a-button>
          </div>
        </template>
      </a-table>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {
  MenuFoldOutlined,
  PhoneFilled,
  DeleteFilled,
  PlayCircleOutlined,
  CalendarOutlined,
  ExclamationCircleOutlined,
  DownloadOutlined,
} from "@ant-design/icons-vue";
import moment, { Moment } from "moment";
import { CallRecordingItem } from "../../types/callRecording";
import SoundPlayerList from "../../components/sound/SoundPlayerList.vue";
import { CRColumns } from "./helper/helper";
import recordingMethodsObj from "./helper/methods";
import callLogsMethodsObj from "../callDetailRecords/helper/methods";
const dateTimeConverter: Moment = moment();

export default defineComponent({
  components: {
    MenuFoldOutlined,
    PhoneFilled,
    DeleteFilled,
    PlayCircleOutlined,
    CalendarOutlined,
    ExclamationCircleOutlined,
    DownloadOutlined,
    SoundPlayerList,
  },
  setup() {
    const authToken = localStorage.getItem("fs_auth_token");
    const store = useStore();
    const router = useRouter();
    const { getCallRecordings, viewRecordingDetails } = recordingMethodsObj();
    const { viewCallLogsDetails } = callLogsMethodsObj();

    const recordingsData = computed(
      (): CallRecordingItem[] => store.getters["getCallRecordings"]
    );
    const cdrData = computed(() => store.getters["getCallDetailRecords"]);

    const value = ref<string>("");
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
    const deleteRecording = (item: CallRecordingItem): void => {
      console.log(item);
      store.dispatch("openConfirmDialog", true);
      // if (confirm("Do you want to delete this recording?")) {
      //   store.dispatch("deleteCallRecording", { recordingId: item.RecordingId });
      // }
    };
    const convertDateTime = (dateTime: string): string => {
      return moment(dateTime).format("MM/DD/YYYY hh:mm A");
    };
    const visible = ref<boolean>(false);
    const loading = ref<boolean>(false);
    const showModal = () => {
      visible.value = true;
    };

    const handleOk = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        visible.value = false;
      }, 2000);
    };

    const handleCancel = () => {
      visible.value = false;
    };
    getCallRecordings();
    return {
      SoundPlayerList,
      CRColumns,
      handleOk,
      handleCancel,
      recordingsData,
      showModal,
      visible,
      getCallRecordings,
      viewRecordingDetails,
      viewCallLogsDetails,
      deleteRecording,
      convertDateTime,
      value,
      date1,
      fromValue,
      toValue,
      onSearch,
      focus,
      handleChange,
    };
  },
});
</script>
<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
.call-config {
  display: flex;
  font-size: 1.5em;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 20px;
}

.d-flex {
  display: flex;
}

.item-container {
  display: grid;
  grid-auto-flow: column;
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
.ant-modal-footer {
  background: red !important;
}
</style>
