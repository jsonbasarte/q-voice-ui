import { ColumnProps } from 'ant-design-vue/es/table/interface';

export const CDRColumns: ColumnProps[] = [
  {
    title: "Direction",
    key: "CallDirection",
    dataIndex: "CallDirection",
    slots: { customRender: "CallDirection" },
    width: '4%',
    ellipsis: true,
  },
  {
    title: "Call UID and Date",
    key: "CallUIDandDate",
    dataIndex: "Id",
    slots: { customRender: "CallUIDandDate" },
    width: '25%',
    ellipsis: true,
  },

  {
    title: "From",
    key: "PhoneNumberFrom",
    dataIndex: "PhoneNumberFrom",
    slots: { customRender: "PhoneNumberFrom" },
    width: '20%',
    ellipsis: true,
  },
  {
    title: "To",
    key: "PhoneNumberTo",
    dataIndex: "PhoneNumberTo",
    slots: { customRender: "PhoneNumberTo" },
    width: '20%',
    ellipsis: true,
  },
  {
    title: "Duration",
    key: "Duration",
    dataIndex: "Duration",
    slots: { customRender: "Duration" },
    width: '10%',
    ellipsis: true,
  },
  {
    title: "Status",
    key: "CallStatus",
    dataIndex: "CallStatus",
    slots: { customRender: "CallStatus" },
    width: '10%',
    ellipsis: true,
  },
];
