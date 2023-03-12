import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default function methodsObj() {
  const store = useStore();
  const router = useRouter();
  const authToken = localStorage.getItem("fs_auth_token");
  const getCallDetailRecords = () => {
    store
      .dispatch("getCallDetailRecords", {
        params: { page: 1, limit: 10 },
        authToken,
      })
      .catch((err) => {
        console.log(err);
        // router.replace("/dashboard");
      });
  };
  const viewCallLogsDetails = (item: any): void => {
    store
      .dispatch("getCallDetailById", { params: item.Id, authToken })
      .then(() => {
        router.push({ path: "/call-logs/details" });
      })
      .catch((err) => {
        console.log(err);
        // router.replace("/dashboard");
      });
  };
  return {
    getCallDetailRecords,
    viewCallLogsDetails,
  };
}
