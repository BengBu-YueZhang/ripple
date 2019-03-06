<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>RippleButton组件</h2>
    <ripple-button text="info" width="300" />
    <ripple-button text="error" color="#d32f2f" text-color="#fafafa" width="300" />
    <ripple-button text="waring" ripple-color="rgba(255, 255, 255, 0.6)" color="#ffeb3b" text-color="#212121" width="300" />
  </div>
</template>

<script>
import RippleButton from './components/RippleButton'

export default {
  name: 'app',

  components: {
    RippleButton
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 60px;
}
</style>
