<template>
  <header :class="classes">
    <div>
      logo
    </div>

    <nav>
      <ul>
        <li>
          1
        </li>

        <li>
          2
        </li>

        <li>
          3
        </li>
      </ul>
    </nav>

    <button type="button" class="ui-header__button">Log In</button>
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type Props = {
  custom?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  custom: false,
})

const classes = computed(() => ['ui-header', { 'is-custom': props.custom }])
</script>

<style lang="scss">
.ui-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #a7ffae;

  &.is-custom { 
    background-color: #0455b3;
  }
}
</style>