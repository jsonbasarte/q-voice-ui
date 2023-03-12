import { ColumnProps } from "ant-design-vue/es/table/interface";

export const PNColumns: ColumnProps[] = [
  {
    title: "Friendly Name",
    key: "friendlyName",
    dataIndex: "friendlyName",
    slots: { customRender: "friendlyName" },
    width: "25%",
    ellipsis: true,
  },
  {
    title: "HTTP Method",
    key: "httpMethod",
    dataIndex: "httpMethod",
    slots: { customRender: "httpMethod" },
    width: "10%",
    ellipsis: true,
  },
  {
    title: "Phone Number",
    key: "phoneNumber",
    dataIndex: "phoneNumber",
    slots: { customRender: "phoneNumber" },
    width: "20%",
    ellipsis: true,
  },
  {
    title: "Weebhook URL",
    key: "webhookUrl",
    dataIndex: "webhookUrl",
    slots: { customRender: "webhookUrl" },
    width: "20%",
    ellipsis: true,
  },
  {
    title: "",
    key: "Actions",
    slots: { customRender: "Actions" },
    width: "15%",
    ellipsis: true,
  },
];
