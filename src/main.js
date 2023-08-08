import { createApp } from "vue";

import App from "./App.vue";
import TagList from "./components/misc/TagList.vue";

import router from "./router.js";
import store from "./store/index.js";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("TagList", TagList);

app.mount("#app");
