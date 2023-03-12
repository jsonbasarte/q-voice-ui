import { ColumnProps } from "ant-design-vue/es/table/interface";

export const ACColumns: ColumnProps[] = [
  {
    title: "IsActive",
    key: "Status",
    slots: { customRender: "Status" },
    width: "4%",
    ellipsis: true,
  },
  {
    title: "Name",
    key: "AccountName",
    dataIndex: "accountName",
    slots: { customRender: "AccountName" },
    width: "25%",
    ellipsis: true,
  },
  {
    title: "SID",
    key: "AccountSID",
    dataIndex: "accountSID",
    slots: { customRender: "AccountSID" },
    width: "25%",
    ellipsis: true,
  },
  {
    title: "Date Created",
    key: "DateCreated",
    // dataIndex: "accountSID",
    slots: { customRender: "DateCreated" },
    width: "25%",
    ellipsis: true,
  },
  {
    title: "",
    key: "Actions",
    dataIndex: "Actions",
    slots: { customRender: "Actions" },
    width: "5%",
    ellipsis: true,
  },
];
