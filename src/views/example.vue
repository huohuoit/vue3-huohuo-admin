<!-- 测试案例 -->
<script setup lang="ts">
import { ref } from "vue";
import { useTestStoreHook } from "/@/store/modules/example";

const message = ref("Hello HuoHuo");
function useMsg() {
  message.value = useTestStoreHook().msg;
}
function changeMsg() {
  useTestStoreHook().handleMsg("你好啊！");
}
</script>

<template>
  <h1 class="text-pink-300">example...</h1>
  <h2>{{ message }}</h2>
  <el-button @click="useMsg">测试store的msg</el-button>
  <el-button @click="changeMsg">测试store的handleMsg</el-button>
</template>

<style scoped></style>
