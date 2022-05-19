<!-- 登录页主页 -->
<script setup lang="ts">
import { bg, avatar, currentWeek } from "./utils/static";
</script>

<template>
  <img :src="bg" class="wave" />
  <div class="login-container">
    <div class="img">
      <component :is="currentWeek" />
    </div>
    <div class="login-box">
      <div class="login-form">
        <avatar class="avatar" />
        <h2>HUOHUO Admin</h2>
        <el-form>
          <el-form-item><el-input clearable placeholder="账号" /></el-form-item>
          <el-form-item><el-input clearable placeholder="密码" /></el-form-item>
          <el-form-item
            ><el-input clearable placeholder="验证码"
          /></el-form-item>
          <el-form-item>
            <div class="w-full h-20px flex justify-between items-center">
              <el-checkbox>记住密码</el-checkbox>
              <el-button text type="primary"> 忘记密码? </el-button>
            </div>
            <el-button class="w-full mt-4" size="default" type="primary">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("/@/style/login.css");
</style>
