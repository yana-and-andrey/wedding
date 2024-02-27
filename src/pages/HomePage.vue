<template>
  <SimpleBar class="home-page">
    <ScreenHome />
    <ScreenOurWedding />
    <ScreenTimeline />
    <ScreenAdditionalInfo />
    <ScreenForm />
  </SimpleBar>
</template>

<script lang="ts" setup>
import SimpleBar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';

import ScreenHome from '@/components/pages/home/ScreenHome.vue';
import ScreenOurWedding from '@/components/pages/home/ScreenOurWedding.vue';
import ScreenTimeline from '@/components/pages/home/ScreenTimeline.vue';
import ScreenAdditionalInfo from '@/components/pages/home/ScreenAdditionalInfo.vue';
import ScreenForm from '@/components/pages/home/ScreenForm.vue';
</script>

<style lang="scss" scoped>
.home-page {
  height: 100dvh;
}
</style>
