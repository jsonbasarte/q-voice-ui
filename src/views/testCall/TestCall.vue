<template>
  <div class="test-call-container">
    <div class="card-container">
      <div class="card-header">
        <!-- <PhoneFilled style="color: white; background: red; font-size: 3em; margin-top: 16px" /> -->
        <img src="../../assets/logo2.png" style="width: 100px; height: 90px" />
      </div>
      <div class="card-body">
       <!-- <a-space direction="vertical"> -->
        <a-input size="large" placeholder="From">
            <!-- <template #prefix>
        <user-outlined type="user" />
      </template> -->
        </a-input>
        <a-input size="large" placeholder="To">
            <!-- <template #prefix>
        <user-outlined type="user" />
      </template> -->
        </a-input>
        <a-input size="large" placeholder="CallerId">
            <!-- <template #prefix>
        <user-outlined type="user" />
      </template> -->
        </a-input>
        <a-button type="primary" class="call-button" shape="round" size="large" block>
          <template #icon><PhoneFilled /></template>
          Go
        </a-button>
        <!-- </a-space> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PhoneFilled,  } from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    PhoneFilled,
    // UserOutlined,
  },
});
</script>
<style scoped>
input[type="text"] {
  height: 50px;
  margin-top: 15px;
  font-size: 1.3em;
}

.test-call-container {
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;
}
.card-container {
  border-radius: 5px;
  background: white;
  box-shadow: 1px 1px 15px #dfdfdf;
  padding: 50px;
  margin-top: 50px;
}
.card-header {
  display: flex;
  flex: 1;
  /* width: "100%"; */
  height: 200px;
  background-color: #3db2ff;
}
.card-body {
      display: block;
  flex: 1;
}
.call-button {
  background: #3db2ff;
  color: white;
  margin-top: 20px;
  font-weight: 600;
}
</style>
