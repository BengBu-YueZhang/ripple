<template>
  <div
    class="ripple-button__wrapper"
    ref="button"
    @click="handleClick"
    :style="{
      width: width ? `${width}px` : '',
      backgroundColor: color ? color : '',
      color: textColor ? textColor : ''
    }">
    <span class="ripple-button__content">{{ text }}</span>
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
    handleClick () {
      this.$emit('click')
    },
  
    /**
     * 初始化
     */
    init () {
      let buttonRefs = this.$refs.button
      buttonRefs.addEventListener('mousedown', (event) => {
        const { top, left, width } = buttonRefs.getBoundingClientRect()
        const x = event.clientX - left
        const y = event.clientY - top
        const ripple = createRipple(x, y, width, this.rippleColor)
        const svg = ripple.ripple
        buttonRefs.appendChild(svg)
        ripple.expandAnimate.beginElement()
        const remove = (event) => {
          buttonRefs.removeEventListener('mouseup', remove)
          buttonRefs.removeEventListener('mouseout', remove)
          ripple.fadeAnimate.beginElement()
          setTimeout(() => {
            buttonRefs.removeChild(svg)
          }, config.dur)
        }
        buttonRefs.addEventListener('mouseup', remove)
        buttonRefs.addEventListener('mouseout', remove)
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
  line-height: 36px;
  border-radius: 2px;
  margin: 2px;
  background-color: #42a5f5;
}

.ripple-button__content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  user-select: none;
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
