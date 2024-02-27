<template>
  <div class="app">
    <Component :is="dynamicComponent">
      <RouterView />
    </Component>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { layoutMatcher, LayoutName } from '@/layouts';
import VLoader from '@ui/VLoader';

const route = useRoute();

const isEmptyRoute = computed(() => !route.name);

const firstRouteWithLayout = computed(() => route.matched.find((value) => value.meta.layout));

const layoutDynamicComponent = computed(() => {
  const layoutName = firstRouteWithLayout.value?.meta.layout ?? LayoutName.DEFAULT;

  return layoutMatcher[layoutName];
});

const dynamicComponent = computed(() => {
  if (isEmptyRoute.value) {
    return VLoader;
  }

  return layoutDynamicComponent.value;
});
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/variables.scss';

html {
  font-size: 100PX;
}

body {
  font-family: $font-primary;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;

  color: $color-primary;
  background: $color-secondary;
}

.app > .v-loader {
  min-height: 100dvh;
}
</style>
