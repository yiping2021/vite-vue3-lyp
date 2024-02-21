<script setup lang="ts">
// import axios from "axios";
import { loginApi } from "@/api/user.ts";
const fetchData = async () => {
  const data = await loginApi({
    username: "system",
    password: "111111",
  });
  if (data && data.code === 200) {
    const {
      data: { token },
    } = data;
    const userInfo = await getUserInfo(token);
  }
};
</script>

<template>
  <!-- <div class="">
    app <el-button type="primary" @click="fetchData">Primary</el-button>
  </div>
  <svg-icon name="home" color="pink" width="100px"></svg-icon> -->
  <router-view></router-view>
</template>

<style scoped lang="scss">
div {
  color: $color;
}
</style>
