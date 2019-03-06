<template>
  <div class="with-ripple__wrapper" ref="with">
    <slot></slot>
  </div>
</template>

<script>
import { createRipple } from '../../util/createRipple.js'
import config from '../../config'

export default {
  name: 'WithRipple'
}
</script>

<style scoped>
</style>
