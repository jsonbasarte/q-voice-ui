
import { createApp } from "vue";
import App from "./App.vue";
import AntdvUi from './components/antdv/AntdvComponents';
import store from './store/store';
import router from './router/router';
const app = createApp(App);

AntdvUi(app);

app.use(store);
app.use(router);
app.mount("#app");
