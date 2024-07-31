<script setup>
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps({
  name: { type: String, required: true },
  size: { type: String, default: 'medium' },
});

const icon = defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg?component`));

const sizeClass = computed(() => {
  const classes = {
    small: 'compIcon--small',
    medium: 'compIcon--medium',
    large: 'compIcon--large',
  }

  return classes[props.size] || 'compIcon--medium';
});
</script>

<template>
  <Component :is="icon" class="compIcon" :class="[sizeClass]" />
</template>

<style lang="scss">
.compIcon {
  color: currentColor;
  fill: currentColor;
  display: inline-block;
  line-height: 0;
  max-height: 100%;
  max-width: 100%;

  &--small {
    height: var(--icon-size-sm);
    min-width: var(--icon-size-sm);
    width: var(--icon-size-sm);
  }

  &--medium {
    height: var(--icon-size-md);;
    min-width: var(--icon-size-md);
    width: var(--icon-size-md);
  }

  &--large {
    height: var(--icon-size-lg);
    min-width: var(--icon-size-lg);
    width: var(--icon-size-lg);
  }
}
</style>
