<template>
  <div :class="$style.container">
    <h1>Not Found</h1>
    <div v-if="routeName && routeParam">
      {{ routeName }} {{ routeParam }} is not found on traQ!
    </div>
    <div v-else>Path {{ $route.path }} is not found on traQ!</div>
    <router-link to="/">back to Home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'NotFound',
  props: {
    routeName: String,
    routeParam: String
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" module>
.container {
  @include color-ui-primary;
  @include background-primary;
  height: 100%;
  padding: 1rem;
}
</style>
