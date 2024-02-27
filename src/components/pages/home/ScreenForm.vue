<template>
  <div class="screen-form">
    <div class="title">
      Форма для подтверждения
    </div>
    <div class="iframe-container">
      <iframe
        src="https://forms.yandex.ru/u/65d7065ec769f181a5949a30/?iframe=1"
        frameborder="0"
        name="ya-form-65d7065ec769f181a5949a30"
        width="100%"
        height="812px"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
// pass
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media.scss';

.screen-form  {
  position: relative;
  max-width: 1100px;
  margin: 64px auto 0;

  @include media-down(xl-) {
    margin: 0 20px;
  }

  .title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 12px;

    @include media-down(md-) {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
}
</style>
