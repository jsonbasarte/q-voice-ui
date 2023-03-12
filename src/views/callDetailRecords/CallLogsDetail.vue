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
            <a-typography-title :level="4">Call Details</a-typography-title>
          </div>
        </div>
      </div>
      <div style="margin-top: 10px">
        <a-descriptions layout="horizontal" bordered size="small">
          <a-descriptions-item
            label="Call Direction"
            :span="3"
            style="text-align: left"
          >
            {{ callRecordDetail.CallDirection }}
          </a-descriptions-item>
          <a-descriptions-item
            label="Call UUID"
            :span="2"
            style="text-align: left"
          >
            {{ callRecordDetail.CallUUID }}
          </a-descriptions-item>
          <a-descriptions-item
            label="Parent Call Uid"
            :span="2"
            style="text-align: left"
          >
            {{ callRecordDetail.CallUUID }}
          </a-descriptions-item>
          <a-descriptions-item label="Date Created" style="text-align: left">
            {{ convertDateTime(callRecordDetail.DateCreated) }}
          </a-descriptions-item>
          <a-descriptions-item label="Start Time" style="text-align: left">
            {{ convertDateTime(callRecordDetail.DateCreated) }}
          </a-descriptions-item>
          <a-descriptions-item label="End Time" style="text-align: left">
            {{ convertDateTime(callRecordDetail.DateCreated) }}
          </a-descriptions-item>
          <a-descriptions-item label="Duration" style="text-align: left">
            {{ callRecordDetail.Duration }}
          </a-descriptions-item>
          <a-descriptions-item label="Cost" :span="3" style="text-align: left">
            US$0.002
          </a-descriptions-item>
          <a-descriptions-item label="From" :span="2" style="text-align: left">
            {{ callRecordDetail.PhoneNumberFrom }}
          </a-descriptions-item>
          <a-descriptions-item label="To" :span="2" style="text-align: left">
            {{ callRecordDetail.PhoneNumberTo }}
          </a-descriptions-item>
          <a-descriptions-item
            label="Call Status"
            :span="3"
            style="text-align: left"
          >
            <a-badge status="processing" />
            {{ callRecordDetail.CallStatus }}
          </a-descriptions-item>
        </a-descriptions>
      </div>
      <div style="display: flex">
        <div style="margin-top: 30px">
          <a-timeline>
            <a-timeline-item color="green">
              <template #dot>
                <CheckCircleOutlined style="font-size: 25px" />
              </template>
              <p style="text-align: left; color: grey; margin-left: 10px">
                Call Started
              </p>
              <p style="color: grey; text-align: left">
                {{ convertDateTime(callRecordDetail.DateCreated) }}
              </p>
            </a-timeline-item>
            <a-timeline-item color="orange">
              <template #dot>
                <PauseCircleOutlined style="color: orange; font-size: 25px" />
              </template>
              <p style="text-align: left; color: grey; margin-left: 10px">
                Call On-Hold
              </p>
              <p style="color: grey; text-align: left">
                {{ convertDateTime(callRecordDetail.DateCreated) }}
              </p>
            </a-timeline-item>
            <a-timeline-item color="green">
              <template #dot>
                <PlayCircleOutlined style="font-size: 25px" />
              </template>
              <p style="text-align: left; color: grey; margin-left: 10px">
                Call Continued
              </p>
              <p style="color: grey; text-align: left">
                {{ convertDateTime(callRecordDetail.DateCreated) }}
              </p>
            </a-timeline-item>
            <a-timeline-item color="gray">
              <p style="text-align: left; margin-left: 10px; fontweight: bold">
                Call Ended
              </p>
              <p style="color: grey; text-align: left">
                {{ convertDateTime(callRecordDetail.DateCreated) }}
              </p>
            </a-timeline-item>
          </a-timeline>
        </div>
        <div style="margin-top: 10px; flex: 1">
          <SoundWaveform />
        </div>
      </div>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons-vue";
import moment, { Moment } from "moment";
const dateTimeConverter: Moment = moment();
import SoundWaveform from "../../components/sound/SoundWaveform.vue";

export default defineComponent({
  components: {
    ArrowLeftOutlined,
    CheckCircleOutlined,
    PauseCircleOutlined,
    PlayCircleOutlined,
    SoundWaveform,
  },
  setup() {
    const store = useStore();
    const callRecordDetail = computed(() => store.getters["getCallDetail"]);
    const convertDateTime = (dateTime: string): string => {
      return moment(dateTime).format("MM/DD/YYYY hh:mm A");
    };
    return {
      callRecordDetail,
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
  font-weight: bold;
  margin: 5px;
}

.detail_value {
  text-align: left;
  margin: 5px;
}
</style>
