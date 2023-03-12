import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default function methodsObj() {
  const store = useStore();
  const router = useRouter();
  const authToken = localStorage.getItem("fs_auth_token");

  const getCallRecordings = () => {
    store
      .dispatch("getCallRecordings", {
        params: { page: 1, limit: 10 },
        authToken,
      })
      .catch((err) => {
        console.log(err);
        // router.push("/dashboard");
      });
  };
  const viewRecordingDetails = (item: any): void => {
    store
      .dispatch("getCallRecord", { params: item.RecordingId, authToken })
      .then(() => {
        router.push({ path: "/call-recording/details" });
      })
      .catch((err) => {
        console.log(err);
        // router.replace("/dashboard");
      });
  };
  return {
    getCallRecordings,
    viewRecordingDetails,
  };
}
