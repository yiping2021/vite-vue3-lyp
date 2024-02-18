import { createApp } from "vue";
import ElementPlus from "element-plus";
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

import "element-plus/dist/index.css";
import "virtual:svg-icons-register";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
