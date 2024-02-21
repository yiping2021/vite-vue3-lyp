import { createApp } from "vue";
import ElementPlus from "element-plus";
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "@/styles/index.scss";
import "element-plus/dist/index.css";
import "virtual:svg-icons-register";
import App from "@/App.vue";
import gloablComponent from "./components/index";
import router from "@/router";
console.log(router, "rouer");

const app = createApp(App);
app.use(gloablComponent);
app.use(router);

app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
