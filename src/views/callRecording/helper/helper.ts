import { ColumnProps } from "ant-design-vue/es/table/interface";

export const CRColumns: ColumnProps[] = [
  {
    title: "Recording UUID and Date",
    key: "RecordingUUID",
    dataIndex: "Id",
    slots: { customRender: "RecordingUUID" },
    width: "20%",
    ellipsis: true,
  },
  {
    title: "Call UID and Date",
    key: "CallUIDandDate",
    dataIndex: "Id",
    slots: { customRender: "CallUIDandDate" },
    width: "25%",
    ellipsis: true,
  },
  {
    title: "Caller",
    key: "PhoneNumberFrom",
    dataIndex: "PhoneNumberFrom",
    slots: { customRender: "PhoneNumberFrom" },
    width: "20%",
    ellipsis: true,
  },
  {
    title: "Callee",
    key: "PhoneNumberTo",
    dataIndex: "PhoneNumberTo",
    slots: { customRender: "PhoneNumberTo" },
    width: "20%",
    ellipsis: true,
  },
  {
    title: "Duration",
    key: "Duration",
    dataIndex: "Duration",
    slots: { customRender: "Duration" },
    width: "5%",
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
