<template>
  <div class="screen-our-wedding">
    <div class="title">
      Церемония и банкет
    </div>
    <div class="flex-container">
      <div class="left">
        <div class="img" />
      </div>
      <div class="right">
        <p class="title">
          Церемония и банкет
        </p>
        <p class="date">
          18 августа 2024
        </p>
        <p class="time">
          16:00 — 23:00
        </p>
        <p class="location">
          Россия, г. Москва, поселок Новобутаково, 45
        </p>
        <a
          href="https://yandex.ru/maps/-/CDBp5MOT"
          target="_blank"
          rel="noopener noreferrer"
          class="location-link"
        >
          Посмотреть карту
        </a>
        <a
          class="confirm"
          @click="onScrollToScreenForm"
        >
          Подтверждение
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { scrollTo } from '@/composables';

function onScrollToScreenForm() {
  scrollTo('.screen-form');
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media.scss';

.screen-our-wedding  {
  position: relative;
  max-width: 1100px;
  margin: 0px auto;
  padding: 128px 0;

  @include media-down(xl-) {
    margin: 0 20px;
  }

  @include media-down(lg) {
    padding: 100px 0;
  }

  @include media-down(md) {
    padding: 56px 0;
  }

  & > .title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 12px;

    @include media-up(md) {
      display: none;
    }

    @include media-down(md-) {
      font-size: 24px;
    }
  }

  .flex-container {
    display: flex;
    width: 100%;

    @include media-down(md) {
      flex-direction: column;
    }
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1 1 50%;
  }

  .right {
    margin-left: 12px;

    @include media-down(md) {
      margin: 12px 0;
    }

    .title {
      font-size: 48px;

      @include media-between(md,lg) {
        font-size: 40px;
      }

      @include media-down(md) {
        display: none;
      }
    }

    .date {
      font-size: 40px;

      @include media-between(md,lg) {
        font-size: 32px;
      }

      @include media-down(md-) {
        font-size: 32px;
      }
    }

    .time {
      font-size: 35px;

      @include media-between(md,lg) {
        font-size: 26px;
      }

      @include media-down(md-) {
        font-size: 26px;
      }
    }

    .location {
      margin-top: 12px;
      font-size: 20px;

      @include media-between(md,lg) {
        font-size: 18px;
      }

      @include media-down(md-) {
        font-size: 17px;
      }
    }

    .location-link {
      font-size: 18px;

      &:hover,
      &:focus {
        text-decoration: underline;
      }

      @include media-between(md,lg) {
        font-size: 16px;
      }

      @include media-down(md-) {
        font-size: 16px;
      }
    }

    .location-link,
    .confirm {
      color: $color-primary;
    }

    .confirm {
      background-color: transparent;
      border: 1px solid $color-primary;
      border-radius: 8px;
      padding: 12px 23px 12px 23px;
      margin-top: 24px;
      display: inline-block;
      cursor: pointer;
      transition: background-color .5s, color .5s, border 0.2s;

      &:hover,
      &:focus {
        background-color: $color-primary;
        color: $color-secondary;
      }

      @include media-between(md,lg) {
        margin-top: 20px;
        padding: 10px 21px 10px 21px;
        font-size: 16px;
      }

      @include media-down(md-) {
        margin-top: 20px;
        padding: 10px 21px 10px 21px;
        font-size: 16px;
      }
    }
  }

  .left {
    margin-right: 12px;

    @include media-down(md) {
      margin: 12px 0;
    }

    @include media-down(md-) {
      margin: 0;
    }

    .img {
      width: 100%;
      padding-top: 70%;
      background-image: url('@/assets/images/47f43d5993c7.jpg');
      background-size: cover;
      background-position: center center;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      border-radius: 2px;
    }
  }
}
</style>
