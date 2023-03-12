<template>
  <a-layout>
    <div class="grid-column-container" style="padding: 0px 10px 10px 0px">
      <div class="item1 stat-item-container">
        <div class="stat-item stat-item1">
          <div style="flex: 1">
            <div class="stat-label">Phone Numbers</div>
            <div class="stat-value">100</div>
          </div>
          <div class="stat-icon-container">
            <PhoneFilled class="stat-icon" />
          </div>
        </div>
        <a-list
          item-layout="horizontal"
          :data-source="data"
          style="margin-top: 30px"
        >
          <template #renderItem="{ index }">
            <a-list-item style="text-align: left; padding: 5px">
              <a-list-item-meta>
                <template #title>
                  <span>
                    <a href="">Lorem Ipsum has been the industry's</a>
                  </span>
                  <!-- <a href="">{{ item.title }}</a> -->
                </template>
                <template #avatar>
                  <a-avatar
                    size="small"
                    :style="{
                      backgroundColor: '#87d068',
                      verticalAlign: 'middle',
                      fontWeight: 'bold',
                    }"
                  >
                    {{ index + 1 }}
                  </a-avatar>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
        <a-button type="dashed" block @click="navigateRoute('/phone-number')"
          >Click to view more....</a-button
        >
      </div>
      <div class="item2 stat-item-container">
        <div class="stat-item stat-item2">
          <div style="flex: 1">
            <div class="stat-label">Call logs</div>
            <div class="stat-value">1548</div>
          </div>
          <div class="stat-icon-container">
            <PhoneFilled class="stat-icon" />
          </div>
        </div>
        <a-list
          item-layout="horizontal"
          :data-source="data"
          style="margin-top: 30px"
        >
          <template #renderItem="{ index }">
            <a-list-item style="text-align: left; padding: 5px">
              <a-list-item-meta>
                <template #title>
                  <span>
                    <a href="">Lorem Ipsum has been the industry's</a>
                  </span>
                  <!-- <a href="">{{ item.title }}</a> -->
                </template>
                <template #avatar>
                  <a-avatar
                    size="small"
                    :style="{
                      backgroundColor: '#108ee9',
                      verticalAlign: 'middle',
                      fontWeight: 'bold',
                    }"
                  >
                    {{ index + 1 }}
                  </a-avatar>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
        <a-button type="dashed" block @click="navigateRoute('/call-logs')"
          >Click to view more....</a-button
        >
      </div>
      <div class="item3 stat-item-container">
        <div class="stat-item stat-item3">
          <div style="flex: 1">
            <div class="stat-label">Recordings</div>
            <div class="stat-value">150</div>
          </div>
          <div class="stat-icon-container">
            <PhoneFilled class="stat-icon" />
          </div>
        </div>
        <a-list
          item-layout="horizontal"
          :data-source="data"
          style="margin-top: 30px"
        >
          <template #renderItem="{ index }">
            <a-list-item style="text-align: left; padding: 5px">
              <a-list-item-meta>
                <template #title>
                  <span>
                    <a href="">Lorem Ipsum has been the industry's</a>
                  </span>
                  <!-- <a href="">{{ item.title }}</a> -->
                </template>
                <template #avatar>
                  <a-avatar
                    size="small"
                    :style="{
                      backgroundColor: '#f50',
                      verticalAlign: 'middle',
                      fontWeight: 'bold',
                    }"
                  >
                    {{ index + 1 }}
                  </a-avatar>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
        <a-button type="dashed" block @click="navigateRoute('/call-recording')"
          >Click to view more....</a-button
        >
      </div>
    </div>

    <a-modal
      v-model:visible="modeVisibility"
      title="Click To Call"
      ok-text="Call"
      @ok="clickToCall"
    >
      <ClickToCall ref="childRef" />
    </a-modal>
    <!-- <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        minHeight: '280px',
        fontSize: '1.3em',
      }"
    >
    <a-row>
      <a-col span="12">
        <Chart />
      </a-col>
    </a-row>
    </a-layout-content> -->
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { PhoneFilled } from "@ant-design/icons-vue";
import ClickToCall from "../views/clickToCall/ClickToCall.vue";
import { CallRecordingItem } from "../types/callRecording";
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: "+182917461624	",
  },
  {
    title: "+182917461624	",
  },
  {
    title: "+182917461624	",
  },
  {
    title: "+182917461624	",
  },
];
export default defineComponent({
  components: { ClickToCall, PhoneFilled },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      modeVisibility: false,
    });

    const recordingsData = computed(
      (): CallRecordingItem[] => store.getters["getCallRecordings"]
    );
    const callRecordDetail = computed(() => store.getters["getCallDetail"]);
    const childRef = ref<InstanceType<typeof ClickToCall>>();
    const openClickToCall = () => (state.modeVisibility = true);
    const clickToCall = () => {
      childRef.value?.clickToCall();
    };
    const openConfig = () => {
      router.push({ path: "call-config" });
    };
    const openCallRecording = () => {
      router.push({ path: "call-recording" });
    };
    const navigateRoute = (path: string) => {
      router.push({ path });
    };
    return {
      ...toRefs(state),
      openClickToCall,
      clickToCall,
      childRef,
      openConfig,
      openCallRecording,
      navigateRoute,
      data,
      recordingsData,
      callRecordDetail,
    };
  },
});
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.grid-column-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  /* background-color: #2196F3; */
  padding: 5px;
}

.grid-column-container > div {
  padding: 10px 0px;
}

.item1 {
  /* background: #f8485e;
  color: #eee; */
  border-radius: 5px;
}

.item2 {
  /* background: #889eaf;
  color: #eee; */
  border-radius: 5px;
}

.item3 {
  /* background: #297f87;
  color: #eee; */
  border-radius: 5px;
}

.stat-item-container {
  padding: 0px !important;
  background: white;
  box-shadow: 1px 1px 15px #dfdfdf;
}

.stat-item {
  padding-top: 5px;
  display: flex;
}

.stat-label {
  text-align: left;
  padding-left: 10px;
}

.stat-value {
  font-size: 3em;
  font-weight: 700;
  text-align: left;
  padding-left: 10px;
}

.stat-icon-container {
  width: 80px;
}

.stat-icon {
  font-size: 3em;
  margin-top: 13px;
  padding: 10px;
  background: #d1d1d157;
  border-radius: 30px;
}

.stat-item1 {
  background: #87d068;
  color: white;
}

.stat-item2 {
  background: #108ee9;
  color: white;
}

.stat-item3 {
  background: #f50;
  color: white;
}
</style>
