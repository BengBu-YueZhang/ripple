<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3>How to use?</h3>
    <h2>RippleButton组件</h2>
    <pre class="code">
      <code>
        {{codeFragment1}}
      </code>
    </pre>
    <ripple-button text="info" width="300" />
    <ripple-button text="error" color="#e57373" text-color="#fafafa" width="300" />
    <ripple-button text="waring" ripple-color="rgba(255, 255, 255, 0.6)" color="#ffee58" text-color="#212121" width="300" />
    <h2>WithRipple组件</h2>
  </div>
</template>

<script>
import RippleButton from './components/RippleButton'
import WithRipple from './components/WithRipple'

export default {
  name: 'app',

  components: {
    RippleButton,
    WithRipple
  },

  data () {
    return {
      codeFragment1: `
        <ripple-button text="info" width="300" />

        <ripple-button text="error" color="#d32f2f" text-color="#fafafa" width="300" />

        <ripple-button text="waring" ripple-color="rgba(255, 255, 255, 0.6)" color="#ffeb3b" text-color="#212121" width="300" />
      `,
      codeFragment2: ''      
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
}

.code {
  background-color: #eee;
}

h2, h3 {
  font-weight: normal;
}
</style>
