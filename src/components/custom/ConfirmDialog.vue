<template>
    <div class="confirm-dialog">
        <!-- <div class="dialog-header">
            <div style="font-size: 1.1em">Delete</div>
        </div> -->
        <div class="dialog-body">
            <ExclamationCircleOutlined style="font-size: 1.5em; margin-right: 10px; color: #faad14" />
            <span style="
    color: #626262;"> Do you really want to delete this record? </span>
        </div>
        <div class="dialog-footer">
            <a-button @click="cancelDelete" style="margin-right: 10px;">No</a-button>
            <a-button type="danger">Yes</a-button>
        </div>
    </div>
</template>
<script lang="ts">
    import { useStore } from 'vuex';
    import { defineComponent } from 'vue';
    import { ExclamationCircleOutlined } from "@ant-design/icons-vue"

    export default defineComponent({
        components: { ExclamationCircleOutlined },
        setup() {
            const store = useStore();

            const cancelDelete = () => {
                store.dispatch("openConfirmDialog", false);
            }
            console.log("Confirm Dialog Component");

            return {
                cancelDelete
            }
        }
    })
</script>
<style scoped>
    .confirm-dialog {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* height: 370px; */
        width: 350px;
        background: #FAFAFA;
        z-index: 99;
    }

    .dialog-header {
        display: flex;
        padding: 10px;
        justify-content: space-between;
        background-color: #efefef;
    }

    .dialog-body {
        padding: 30px 20px 20px 20px;
        text-align: left;
    }

    .dialog-footer {
        display: flex;
        padding: 20px;
        justify-content: flex-end;
        /* background-color: #efefef; */
        text-align: right;
    }
</style>