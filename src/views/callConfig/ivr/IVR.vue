<template>
    <div>
        <div :style="{
        background: '#fff',
        padding: '10px',
        textAlign: 'left',
        borderBottom: '1px solid #e9e9e9'
    }" @back="() => null">
            <!-- <router-link to="/call-config-new">
                <ArrowLeftOutlined /> Back
            </router-link> -->
        </div>
        <div style=" background: #fff;
        min-height: 280px">
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from "vue";
    // import { ArrowLeftOutlined } from "@ant-design/icons-vue";
    export default defineComponent({
        components: {
            // ArrowLeftOutlined
        },
        setup() {
            console.log("Setup from IVR Config")
        }
    })
</script>