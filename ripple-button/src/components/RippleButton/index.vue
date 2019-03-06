<template>
  <div
    class="ripple-button__wrapper"
    ref="button"
    :style="{
      width: width ? `${width}px` : '',
      backgroundColor: color ? color : '',
      color: textColor ? textColor : ''
    }"
  >
    <span>{{ text }}</span>
  </div>
</template>

<script>
import { createRipple } from '../../util/createRipple.js'
import config from '../../config'

export default {
  name: 'RippleButton',

  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },

    width: {
      type: [Number, String],
      required: false,
      default: ''
    },
    
    rippleColor: {
      type: String,
      required: false,
      default: 'rgba(0, 0, 0, 0.2)'
    },

    color: {
      type: String,
      required: false,
      default: ''
    },

    textColor: {
      type: String,
      required: false,
      default: ''
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    /**
     * 初始化事件
     */
    init () {
      let button = this.$refs.button
      button.addEventListener('mousedown', (event) => {
        const { top, left, width } = button.getBoundingClientRect()
        const x = event.clientX - left
        const y = event.clientY - top
        const ripple = createRipple(x, y, width, this.rippleColor)
        const svg = ripple.ripple
        button.appendChild(svg)
        ripple.expandAnimate.beginElement()
        const remove = (event) => {
          if (event.type === 'mouseup') {
            this.$emit('click')
          }
          button.removeEventListener('mouseup', remove)
          button.removeEventListener('mouseout', remove)
          ripple.fadeAnimate.beginElement()
          setTimeout(() => {
            button.removeChild(svg)
          }, config.dur)
        }
        button.addEventListener('mouseup', remove)
        button.addEventListener('mouseout', remove)
      })
    }
  }
}
</script>

<style>
.ripple-button__wrapper {
  position: relative;
  width: auto;
  height: 36px;
  border-radius: 2px;
  line-height: 36px;
  font-size: 14px;
  font-weight: normal;
  color: #fff;
  background-color: #42a5f5;
  user-select: none;
  margin: 2px;
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
