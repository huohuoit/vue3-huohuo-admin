<!-- 登录页主页 -->
<script setup lang="ts">
import Motion from "./utils/motion";
import phone from "./components/phone.vue";
import qrCode from "./components/qrCode.vue";
import regist from "./components/regist.vue";
import update from "./components/update.vue";
import { bg, avatar, currentWeek } from "./utils/static";
import { operates, thirdParty } from "./utils/enums";
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
        <Motion> <h2>Huohuo Admin</h2></Motion>
        <el-form>
          <Motion :delay="100">
            <el-form-item
              ><el-input clearable placeholder="账号" /></el-form-item
          ></Motion>
          <Motion :delay="150"
            ><el-form-item
              ><el-input clearable placeholder="密码" /></el-form-item
          ></Motion>
          <Motion :delay="200">
            <el-form-item
              ><el-input clearable placeholder="验证码"
            /></el-form-item>
          </Motion>
          <Motion :delay="250">
            <el-form-item>
              <div class="w-full h-20px flex justify-between items-center">
                <el-checkbox>记住密码</el-checkbox>
                <el-button text type="primary"> 忘记密码? </el-button>
              </div>
              <el-button class="w-full mt-4" size="default" type="primary">
                登录
              </el-button>
            </el-form-item>
          </Motion>
          <Motion :delay="300">
            <el-form-item>
              <div class="w-full h-20px flex justify-between items-center">
                <el-button
                  v-for="(item, index) in operates"
                  :key="index"
                  class="w-full mt-4"
                  size="default"
                >
                  {{ item.title }}
                </el-button>
              </div>
            </el-form-item>
          </Motion>
        </el-form>
        <Motion :delay="350">
          <el-form-item>
            <el-divider>
              <p class="text-gray-500 text-xs">第三方登录</p>
            </el-divider>
            <div class="w-full flex justify-evenly">
              <span
                v-for="(item, index) in thirdParty"
                :key="index"
                :title="`${item.title}登陆`"
              >
                <IconifyIconOnline
                  :icon="`ri:${item.icon}-fill`"
                  width="20"
                  class="cursor-pointer text-gray-500 hover:text-blue-400"
                />
              </span>
            </div>
          </el-form-item>
        </Motion>
        <!-- 手机号登陆 -->
        <phone />
        <!-- 二维码登陆 -->
        <qrCode />
        <!-- 注册 -->
        <regist />
        <!-- 忘记密码 -->
        <update />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("/@/style/login.css");
</style>
