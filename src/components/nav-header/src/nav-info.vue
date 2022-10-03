<template>
  <div class="nav-info">
    <div class="info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            size="medium"
            class="avatar"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick"
              >退出系统</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-info" divided>个人信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="operation">
      <span
        ><a href="https://github.com/ddinnis">
          <img class="icon-img" src="@/assets/img/github-logo.svg" alt="github"
        /></a>
      </span>

      <span>
        <a href="https://ddinnis.github.io/">
          <i class="el-icon-document"></i>
        </a>
      </span>
      <span><i class="el-icon-bell"></i></span>
      <span><i class="el-icon-chat-dot-round"></i></span>
      <span>
        <span class="dot"></span>
        <i class="el-icon-postcard"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useRouter } from 'vue-router'

import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const router = useRouter()

    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }

    return {
      handleExitClick
    }
  }
})

Number('123')
</script>

<style scoped lang="less">
.nav-info {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;

    .avatar {
      width: 30px;
      height: 30px;
    }
  }

  .operation {
    margin-right: 20px;

    span {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 35px;
      line-height: 35px;

      &:hover {
        background: #f2f2f2;
        cursor: pointer;
      }
      .icon-img {
        width: 20px;
        height: 20px;
        padding-top: 2px;
      }

      i {
        font-size: 20px;
      }

      .dot {
        position: absolute;
        top: 3px;
        right: 3px;
        z-index: 10;
        width: 6px;
        height: 6px;
        background: red;
        border-radius: 100%;
      }
    }
  }
}
</style>
