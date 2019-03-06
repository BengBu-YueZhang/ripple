<template>
  <div class="with-ripple__wrapper" ref="with">
    <slot></slot>
  </div>
</template>

<script>
import { createRipple } from '../../util/createRipple.js'
import config from '../../config'

export default {
  name: 'WithRipple',

  props: {
    rippleColor: {
      type: String,
      required: false,
      default: 'rgba(0, 0, 0, 0.2)'
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      let withRefs = this.$refs.with
      withRefs.addEventListener('mousedown', (event) => {
        const { top, left, width } = withRefs.getBoundingClientRect()
        const x = event.clientX - left
        const y = event.clientY - top
        const ripple = createRipple(x, y, width, this.rippleColor)
        const svg = ripple.ripple
        withRefs.appendChild(svg)
        ripple.expandAnimate.beginElement()
        const remove = (event) => {
          withRefs.removeEventListener('mouseup', remove)
          withRefs.removeEventListener('mouseout', remove)
          ripple.fadeAnimate.beginElement()
          setTimeout(() => {
            buttonRefs.removeChild(svg)
          }, config.dur)
        }
        withRefs.addEventListener('mouseup', remove)
        withRefs.addEventListener('mouseout', remove)
      })
    }
  }
}
</script>

<style>
.with-ripple__wrapper {
  position: relative;
}

.ripple {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
</style>
