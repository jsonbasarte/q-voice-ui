import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default function methodsObj() {
  const store = useStore();
  const router = useRouter();
  const authToken = localStorage.getItem("fs_auth_token");
  const getAccountConfigs = () => {
    store
      .dispatch("getAccountConfigs", {
        params: { page: 1, limit: 1 },
        authToken,
      })
      .catch((err) => {
        console.log(err);
        // router.replace("/dashboard");
      });
  };
  const viewAccountDetails = (item: any): void => {
    store
      .dispatch("getAccountConfigById", {
        id: item.id,
        authToken: authToken,
      })
      .then((res) => {
        if (res.data.Status === 1) {
          store.dispatch("setAccountConfigData", res.data.Data);
          router.push({ path: "/account-config/details" });
        }
      })
      .catch((err) => {
        console.log(err);
        // router.replace("/dashboard");
      });
  };
  return {
    getAccountConfigs,
    viewAccountDetails,
  };
}
