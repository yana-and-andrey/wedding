<template>
  <div
    class="screen-home"
    :class="{ 'parallax-fixed': state.isDisabledParallax }"
  >
    <div class="img" />
    <div class="filter" />
    <div class="content">
      <div class="date">
        18 августа 2024
      </div>
      <div class="ctm">
        Мы решили пожениться!
      </div>
      <div class="names">
        Яна и Андрей
      </div>
      <div
        class="scroll-down"
        @click="onScrollToScreenOurWedding"
      >
        <IconArrowBottom class="icon-arrow-bottom" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onBeforeMount } from 'vue';
import IconArrowBottom from '@/components/svg/IconArrowBottom.vue';
import { scrollTo } from '@/composables';

const state = reactive({
  isDisabledParallax: false,
});

onBeforeMount(() => {
  state.isDisabledParallax = !!navigator.userAgent.match(/(iPad|iPhone|iPod|Android|Silk)/gi);
});

function onScrollToScreenOurWedding() {
  scrollTo('.screen-our-wedding');
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media.scss';

.parallax-fixed {
  &.screen-home {
    &,
    .img {
      background-attachment: scroll;
    }
  }
}

.screen-home {
  background-image: url('@/assets/images/vA4IJp2386k.min.jpg');
  background-color: #000;

  font-family: $font-secondary;
  font-size: 62px;

  color: $color-secondary;

  @include media-down(lg) {
    font-size: 47px;
  }

  @include media-down(md) {
    font-size: 31px;
  }

  &,
  .img {
    height: 100dvh;
    position: relative;

    text-align: center;
    vertical-align: middle;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
  }

  .img {
    background-image: url('@/assets/images/vA4IJp2386k.jpg');
  }

  .filter {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6));
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .scroll-down {
    position: absolute;
    width: 100%;
    height: 20dvb;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .icon-arrow-bottom {
    fill: $color-secondary;
    animation: arrow-bottom 1.7s infinite ease;
  }
}

@keyframes arrow-bottom {
  0%, 100% {
    transform: translateY(0);
  }
  50%, 55% {
    transform: translateY(-7px);
  }
}
</style>
