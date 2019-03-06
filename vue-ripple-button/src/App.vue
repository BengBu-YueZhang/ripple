<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Ripple</h1>
    <h2>RippleButton Component</h2>
    <h3>How to use</h3>
    <pre class="code">
      <code>
        {{codeFragment1}}
      </code>
    </pre>
    <h3>Preview</h3>
    <ripple-button text="info" width="300" />
    <ripple-button text="error" color="#e57373" text-color="#fafafa" width="300" />
    <ripple-button text="waring" ripple-color="rgba(255, 255, 255, 0.6)" color="#ffee58" text-color="#212121" width="300" />
    <h2>WithRipple Component</h2>
    <h3>How to use</h3>
    <pre class="code">
      <code>
        {{codeFragment2}}
      </code>
    </pre>
    <h3>Preview</h3>
    <with-ripple>
      <div class="paragraph">
        <h5 class="paragraph-title">Hi Vue!</h5>
        <p class="paragraph-detail">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
      </div>
    </with-ripple>
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
      codeFragment2: `
        <with-ripple>
          <div class="paragraph">
            <h5 class="paragraph-title">Hi Vue!</h5>
            <p class="paragraph-detail">Vue (pronounced /vjuː/, like view) is a progressive ……</p>
          </div>
        </with-ripple>
      `      
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
  padding: 20px;
}

.code {
  background-color: #eee;
}

h1, h2, h3, h5 {
  font-weight: 300;
}

.paragraph {
  background-color: #eee;
  box-sizing: border-box;
  padding: 10px 20px;
  width: 800px;
}

.paragraph-title {
  font-size: 26px;
  margin: 0;
  padding: 0;
}

.paragraph-detail {
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  padding: 0;
}
</style>
