<template>
  <div class="menu">
    <page-content
      newBtnText="新建菜单"
      :contentConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'hymenu',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
