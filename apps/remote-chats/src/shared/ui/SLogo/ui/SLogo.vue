<template>
  <div class="logo">
    <router-link :to="{ name: ROUTE_NAMES.MAIN }">
      <s-icon name="logo-dark" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ROUTE_NAMES } from '#shared/constants'
import { SIcon } from '#shared/ui'
</script>

<style lang="scss" scoped>
.logo {
  .s-icon {
    width: 132px;
    height: 30px;
  }
}
</style>
