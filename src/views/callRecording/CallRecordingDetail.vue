<template>
  <div class="call-recording-container">
    <div
      :style="{
        background: '#fff',
        padding: '10px',
        textAlign: 'left',
        borderBottom: '1px solid #e9e9e9',
      }"
      @back="() => null"
    >
      <a-button type="link" @click="$router.go(-1)">
        <ArrowLeftOutlined /> Back
      </a-button>
    </div>
    <a-layout style="padding: 20px; background: white">
      <div class="detail_container">
        <div class="detail_header">
          <div style="flex: 1">
            <a-typography-title :level="4"
              >Call Recording Details</a-typography-title
            >
          </div>
        </div>
        <div style="margin-top: 10px">
          <a-descriptions layout="horizontal" bordered size="small">
            <a-descriptions-item
              label="Recording UUID"
              :span="2"
              style="text-align: left"
            >
              {{ callRecordingData.RecordingUUID }}
            </a-descriptions-item>
            <a-descriptions-item
              label="Date Created"
              :span="2"
              style="text-align: left"
            >
              {{ convertDateTime(callRecordingData.DateCreated) }}
            </a-descriptions-item>
            <a-descriptions-item
              label="Call UUID"
              :span="3"
              style="text-align: left"
            >
              {{ callRecordingData.CallUUID }}
            </a-descriptions-item>
            <a-descriptions-item label="Duration" style="text-align: left">
              {{ callRecordingData.Duration }}
            </a-descriptions-item>
            <a-descriptions-item label="Caller" style="text-align: left">
              <!-- {{ callRecordingData.PhoneNumberFrom }} -->
            </a-descriptions-item>
            <a-descriptions-item label="Callee" style="text-align: left">
              <!-- {{ callRecordingData.PhoneNumberTo }} -->
            </a-descriptions-item>
            <a-descriptions-item
              label="File Path"
              :span="3"
              style="text-align: left"
            >
              {{ callRecordingData.FilePath }}
            </a-descriptions-item>
          </a-descriptions>
        </div>
        <div style="margin-top: 10px">
          <SoundWaveform />
        </div>
      </div>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, computed, ref } from "vue";
import {
  ArrowLeftOutlined,
} from "@ant-design/icons-vue";
import { useStore } from "vuex";
import moment, { Moment } from "moment";
import SoundWaveform from "../../components/sound/SoundWaveform.vue";
const dateTimeConverter: Moment = moment();
export default defineComponent({
  components: {
    ArrowLeftOutlined,
    SoundWaveform,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const back = (): void => {
      router.push({ path: "/" });
    };
    const convertDateTime = (dateTime: string): string => {
      return moment(dateTime).format("MM/DD/YYYY hh:mm A");
    };
    const callRecordingData = computed(
      () => store.getters["getCallRecordingDetail"]
    );

    return {
      back,
      callRecordingData,
      convertDateTime,
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

.detail_item {
  display: flex;
}

.detail_label {
  text-align: left;
  /* font-weight: 600; */
  width: 200px;
  padding: 10px 10px 10px 0px;
}

.detail_value {
  flex: 1;
  text-align: left;
  padding: 10px;
}
</style>
