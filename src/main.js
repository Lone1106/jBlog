import { createApp } from "vue";

import App from "./App.vue";
import TagList from "./components/misc/TagList.vue";
import FormInput from "./components/misc/FormInput.vue";
import FormButton from "./components/misc/FormButton.vue";
import TextareaInput from "./components/misc/TextareaInput.vue";

import router from "./router.js";
import store from "./store/index.js";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("TagList", TagList);
app.component("FormInput", FormInput);
app.component("FormButton", FormButton);
app.component("TextareaInput", TextareaInput);

app.mount("#app");
