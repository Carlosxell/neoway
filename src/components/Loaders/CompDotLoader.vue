<template>
  <article aria-busy="true"
           class="tDotLoader"
           role="alert">
    <span aria-hidden="true" class="tDotLoader__loader"></span>
    <p class="tDotLoader__paragraph">
      <slot>{{ text }}</slot>
    </p>
  </article>
</template>

<script>
export default {
  name: 'TDotLoader',
  props: {
    text: { value: String, default: () => 'Carregando' }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/utilities/utils/_all.scss';
@import '@/assets/styles/utilities/variables/all';

.tDotLoader {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: var(--gap-3);
  min-height: 144px;

  &__loader {
    animation: DotLoader 1.5s infinite linear;
    border-radius: var(--border-radius-sm);
    box-shadow: 9980px 0 0 0 var(--color-secondary-pure), 10004px 0 0 0 var(--color-secondary-medium), 10028px 0 0 0 var(--color-secondary-medium), 10052px 0 0 0 var(--color-secondary-medium);
    background-color: var(--color-secondary-medium);
    color: var(--color-secondary-medium);
    height: var(--gap-4);
    left: -10017px;
    position: relative;
    width: var(--gap-4);
  }

  &__paragraph {
    @include body-default-medium;
    color: var(--color-primary-light);
    line-height: var(--line-height-default);

    .v-application & {
      margin: var(--gap-2) auto 0;
    }
  }

  .theme--dark & {
    &__loader {
      animation: DotLoader--dark 1.5s infinite linear;
    }

    &__paragraph {
      color: var(--hc-color-primary-pure);
    }
  }
}

@keyframes DotLoader {
  0% {
    box-shadow: 9980px 0 0 0 var(--color-secondary-light), 10004px 0 0 0 var(--color-secondary-light), 10028px 0 0 0 var(--color-secondary-light), 10052px 0 0 0 var(--color-secondary-light);
  }
  16.667% {
    box-shadow: 9980px -12px 0 0 var(--color-secondary-pure), 10004px 0 0 0 var(--color-secondary-light), 10028px 0 0 0 var(--color-secondary-light), 10052px 0 0 0 var(--color-secondary-light);
  }
  33.333% {
    box-shadow: 9980px 0 0 0 var(--color-secondary-light), 10004px 0 0 0 var(--color-secondary-light), 10028px 0 0 0 var(--color-secondary-light), 10052px 0 0 0 var(--color-secondary-light);
  }
  50% {
    box-shadow: 9980px 0 0 0 var(--color-secondary-light), 10004px -12px 0 0 var(--color-secondary-pure), 10028px 0 0 0 var(--color-secondary-light), 10052px 0 0 0 var(--color-secondary-light);
  }
  66.667% {
    box-shadow: 9980px 0 0 0 var(--color-secondary-light), 10004px 0 0 0 var(--color-secondary-light), 10028px 0 0 0 var(--color-secondary-light), 10052px 0 0 0 var(--color-secondary-light);
  }
  83.333% {
    box-shadow: 9980px 0 0 0 var(--color-secondary-light), 10004px 0 0 0 var(--color-secondary-light), 10028px -12px 0 0 var(--color-secondary-pure), 10052px 0 0 0 var(--color-secondary-light);
  }
  100% {
    box-shadow: 9980px 0 0 0 var(--color-secondary-light), 10004px 0 0 0 var(--color-secondary-light), 10028px 0 0 0 var(--color-secondary-light), 10052px -12px 0 0 var(--color-secondary-pure);
  }
}

@keyframes DotLoader--dark {
  0% {
    box-shadow: 9980px 0 0 0 var(--hc-color-primary-light), 10004px 0 0 0 var(--hc-color-primary-light), 10028px 0 0 0 var(--hc-color-primary-light), 10052px 0 0 0 var(--hc-color-primary-light);
  }
  16.667% {
    box-shadow: 9980px -12px 0 0 var(--hc-color-primary-pure), 10004px 0 0 0 var(--hc-color-primary-light), 10028px 0 0 0 var(--hc-color-primary-light), 10052px 0 0 0 var(--hc-color-primary-light);
  }
  33.333% {
    box-shadow: 9980px 0 0 0 var(--hc-color-primary-light), 10004px 0 0 0 var(--hc-color-primary-light), 10028px 0 0 0 var(--hc-color-primary-light), 10052px 0 0 0 var(--hc-color-primary-light);
  }
  50% {
    box-shadow: 9980px 0 0 0 var(--hc-color-primary-light), 10004px -12px 0 0 var(--hc-color-primary-pure), 10028px 0 0 0 var(--hc-color-primary-light), 10052px 0 0 0 var(--hc-color-primary-light);
  }
  66.667% {
    box-shadow: 9980px 0 0 0 var(--hc-color-primary-light), 10004px 0 0 0 var(--hc-color-primary-light), 10028px 0 0 0 var(--hc-color-primary-light), 10052px 0 0 0 var(--hc-color-primary-light);
  }
  83.333% {
    box-shadow: 9980px 0 0 0 var(--hc-color-primary-light), 10004px 0 0 0 var(--hc-color-primary-light), 10028px -12px 0 0 var(--hc-color-primary-pure), 10052px 0 0 0 var(--hc-color-primary-light);
  }
  100% {
    box-shadow: 9980px 0 0 0 var(--hc-color-primary-light), 10004px 0 0 0 var(--hc-color-primary-light), 10028px 0 0 0 var(--hc-color-primary-light), 10052px -12px 0 0 var(--hc-color-primary-pure);
  }
}
</style>
