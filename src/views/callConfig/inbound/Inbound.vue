<template>
    <div :style="{
        background: '#fff',
        padding: '10px',
        textAlign: 'left',
        borderBottom: '1px solid #e9e9e9'
    }" @back="() => null">
      <router-link to="/call-config-new">
        <ArrowLeftOutlined /> Back
      </router-link>
    </div>
    <div style="background: white">
        <div :style="{
        padding: '10px',

        borderBottom: '1px solid #e9e9e9',
        textAlign: 'left'
    }" @back="() => null"> 
    
    <div style="display: flex;">
                <div style="flex: 1; text-align: left;" class="page-title">Inbound Config List </div>
                <div style="flex: 1; text-align: right;">
                    <PlusSquareFilled style="color: #57cc99; cursor: pointer; margin-top: 5px; font-size: 1.5em;" title="Add Inbound config" />
                </div>
            </div>
    
     </div>
        <b-row v-if="!phoneNumberConfigList.length">
            <b-col>
                <a-table :data-source="phoneNumberConfigList" :columns="columns">
                    <template #action="{ record }">
                        <a title="Edit" @click="editConfig(record)">
                            <EditOutlined style="font-size: 1.2em; margin-right: 15px" />
                        </a>
                        <a title="Delete" @click="deleteConfig(record)">
                            <DeleteOutlined style="font-size: 1.2em" />
                        </a>
                    </template>
                </a-table>
            </b-col>
        </b-row>
    </div>
</template>
<script lang="ts">
    import { defineComponent, toRefs } from "vue";
    import { EditOutlined, DeleteOutlined, PlusSquareFilled, ArrowLeftOutlined } from "@ant-design/icons-vue";
    import gettersObj from "./helper/getters";
    import methodsObj from "./helper/methods";

    export default defineComponent({
        components: {
            EditOutlined,
            DeleteOutlined,
            PlusSquareFilled,
            ArrowLeftOutlined
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

    .page-title {
        font-size: 1.2em;
        font-weight: 600;
        color: #5e5e5e;
    }
</style>