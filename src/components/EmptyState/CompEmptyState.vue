<template>
  <div :class="['compEmptyState', { 'compEmptyState--errorVariant': isErrorVariant }, { 'compEmptyState--border': showBorder}]">
    <slot name="icon">
      <CompIcon :alt="`ícone de ${isErrorVariant ? 'alerta' : 'informação'}`"
                class="csIcon--md"
                name="chat_info"
                size="large" />
    </slot>
    <h4 class="compEmptyState__title">
      <slot name="title">{{ title }}</slot>
    </h4>
    <p class="compEmptyState__subtitle">
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </div>
</template>

<script setup>
import CompIcon from '@/components/Icon/CompIcon.vue'

defineProps({
  isErrorVariant: { type: Boolean, default: false },
  showBorder: { type: Boolean, default: true },
  subtitle: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<style lang="scss">
@import '@/styles/utilities/utils/all';
@import '@/styles/utilities/variables/all';

:root {
  --empty-state-min-height: 172px;
}

.compEmptyState {
  align-items: center;
  border-radius: var(--border-radius-xs);
  border: var(--border-width-sm) solid transparent;
  color: var(--neutral-color-high-medium-1);
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: var(--gap-3) 0;
  justify-content: center;
  min-height: var(--empty-state-min-height);
  transition: border-color .12s linear, color .12s linear;
  width: 100%;

  &__subtitle,
  &__title {
    margin: 0;
    padding-top: var(--gap-2);
  }

  &__subtitle {
    @include highlight-subtitle-default;
  }

  &__title {
    @include highlight-title-default($fs: var(--font-size-lg), $fw: var(--font-weight-bold));
  }

  &--border {
    border-color: var(--neutral-color-high-dark);
  }

  &--errorVariant {
    border-color: var(--feedback-color-error-dark);
    color: var(--feedback-color-error-dark);
  }
}
</style>
