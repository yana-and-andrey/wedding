<template>
  <div class="screen-additional-info">
    <div class="title">
      Дополнительная информация
    </div>
    <div class="dress-code">
      <div class="left">
        <h3>Цветовая гамма</h3>
        <p>
          Мы будем счастливы, если вы разделите с нами момент нашей радости и любви!
          Например, можно поддержать стиль свадьбы своим нарядом.
          Вот основные цвета нашего праздника:
        </p>
      </div>
      <div class="right">
        <a
          href="https://color.adobe.com/My-Color-Theme-color-theme-21198e20-88c4-4c70-90aa-419cd0536306/"
          target="_blank"
          rel="noopener noreferrer"
          class="color-1"
        />
        <a
          href="https://color.adobe.com/My-Color-Theme-color-theme-21198e20-88c4-4c70-90aa-419cd0536306/"
          target="_blank"
          rel="noopener noreferrer"
          class="color-2"
        />
        <a
          href="https://color.adobe.com/My-Color-Theme-color-theme-21198e20-88c4-4c70-90aa-419cd0536306/"
          target="_blank"
          rel="noopener noreferrer"
          class="color-3"
        />
      </div>
    </div>
    <div class="kids">
      <h3>Дети</h3>
      <p>
        Родителям рекомендуется позволить маленьким детям принести свои игрушки и другие предметы первой необходимости,
        которых хватит на весь день. Свадебная площадка закрыта от посторонних и безопасна,
        так что беспокоиться не о чем. Вы можете расслабиться и сосредоточиться на церемонии,
        а маленькие гости могут по-своему насладиться этим днем.
        Сообщите нам, если вашему ребенку нужен будет стульчик для кормления.
      </p>
    </div>
    <div class="qr">
      <div class="left">
        <h3>Фотография</h3>
        <p>
          Поделитесь фотографиями, которые были сделаны на свадьбе,
          в нашем телеграмм-канале: нажмите на этот QR-код или отсканируйте его.
          Если все получилось — помогите другим гостям найти ссылку на канал :)
          Каждый гость сможет загрузить фотографии в день свадьбы или позже.
        </p>
      </div>
      <div class="right">
        <a
          class="qr-photo-link"
          href="https://t.me/+U4uo9WYT6NplYWMy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TmQrPhoto class="qr-photo" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TmQrPhoto from '@/components/svg/TmQrPhoto.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media.scss';

.screen-additional-info {
  position: relative;
  max-width: 1100px;
  margin: 0px auto;
  padding: 64px 0;

  @include media-down(xl-) {
    margin: 0 20px;
  }

  @include media-down(lg) {
    padding: 56px 0;
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

  .dress-code,
  .qr {
    display: flex;
    align-items: center;
    justify-content: center;

    @include media-down(md-) {
      flex-direction: column;
    }
  }

  .dress-code {
    @include media-down(md-) {
      flex-direction: column;
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;

      @include media-between(md-,md) {
        flex-direction: column;
      }
    }
  }

  .left {
    flex: 1 1 75%;
    margin-right: 12px;

    @include media-down(md-) {
      margin-right: 0;
    }
  }

  .right {
    flex: 1 1 25%;
    margin-left: 12px;

    @include media-down(md-) {
      margin: 12px 0 0;
    }
  }

  .color-1,
  .color-2,
  .color-3 {
    height: 50px;
    width: 50px;
    border-radius: 50%;

    @include media-between(md-,md) {
      height: 45px;
      width: 45px;
    }
  }

  .color-1 {
    background-color: #475E37;
  }

  .color-2 {
    background-color: #7D9367;
    margin: 0 24px;

    @include media-between(md-,md) {
      margin: 15px 0;
    }
  }

  .color-3 {
    background-color: $color-primary;
  }

  .kids {
    margin-top: 12px;
  }

  .qr {
    margin-top: 12px;

    .qr-photo-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .qr-photo {
      max-width: 150px;
      width: 100%;
    }
  }
}
</style>
