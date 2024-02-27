<template>
  <div class="screen-timeline">
    <div class="title">
      Подробный план мероприятия
    </div>
    <ul class="timeline">
      <li class="timeline-item">
        <div class="timeline-info">
          <span>/ 16:00 /</span>
        </div>
        <div class="timeline-marker" />
        <div class="timeline-content">
          <h3 class="timeline-title">
            Сбор гостей
          </h3>
          <p>
            Наша свадьба состоится в Английском доме. Вход через большие ворота с колоннами и
            зелёными конусами на верхушках. На площадке есть небольшая парковка для автомобилей,
            поблизости — городская парковка.
          </p>
        </div>
      </li>
      <li class="timeline-item">
        <div class="timeline-info">
          <span>/ 16:00 - 17:00 / 1 час</span>
        </div>
        <div class="timeline-marker" />
        <div class="timeline-content">
          <h3 class="timeline-title">
            Фуршет и церемония
          </h3>
          <p>
            В это время состоится церемония бракосочетания.<br>
            Перед церемонией мы предложим вам фуршет и напитки.
          </p>
        </div>
      </li>
      <li class="timeline-item">
        <div class="timeline-info">
          <span>/ 17:00 - 23:00 / 6 часов</span>
        </div>
        <div class="timeline-marker" />
        <div class="timeline-content">
          <h3 class="timeline-title">
            Банкет
          </h3>
          <p>
            Это основная часть нашего мероприятия: планируется праздничный ужин и развлечения.
          </p>
        </div>
      </li>
      <li class="timeline-item">
        <div class="timeline-info">
          <span>/ 22:50 - 23:00 / 10 минут</span>
        </div>
        <div class="timeline-marker" />
        <div class="timeline-content">
          <h3 class="timeline-title">
            Завершение мероприятия
          </h3>
          <p>
            Мы бы хотели веселиться с вами всю ночь напролет! <br>
            Однако по правилам площадки, праздник нужно закончить в 23:00.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// pass
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/media.scss';

.screen-timeline {
  position: relative;
  max-width: 1100px;
  margin: 0px auto;

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

  .timeline {
    line-height: 1.4em;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    h1, h2, h3, h4, h5, h6 {
      line-height: inherit;
    }
  }

  .timeline-item {
    padding-left: 40px;
    position: relative;

    &:last-child {
      padding-bottom: 0;
    }
  }

  .timeline-info {
    margin: 0 0 .5em 0;
    white-space: nowrap;
  }

  .timeline-marker {
    position: absolute;
    top: 0; bottom: 0; left: 0;
    width: 15px;

    &:before {
      background: $color-tertiary;
      border: 3px solid transparent;
      border-radius: 100%;
      content: "";
      display: block;
      height: 15px;
      position: absolute;
      top: 4px; left: 0;
      width: 15px;
      transition: background 0.3s ease-in-out,
              border 0.3s ease-in-out;
    }

    &:after {
      content: "";
      width: 3px;
      background: #CCD5DB;
      display: block;
      position: absolute;
      top: 24px; bottom: 0; left: 6px;
    }

    .timeline-item:last-child &:after {
      content: none;
    }
  }

  .timeline-item:not(.period):hover .timeline-marker:before {
    background: transparent;
    border: 3px solid $color-tertiary;
  }

  .timeline-content {
    padding-bottom: 40px;

    p:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
