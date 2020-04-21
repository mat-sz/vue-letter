# vue-letter

Vue.js port of [react-letter](https://github.com/mat-sz/vue-letter).

React is a dependency since react-letter depends on it, but this doesn't show up in the compiled output and will get "tree shaken" by webpack. This will be resolved in a future release.

Available in [NPM](https://npmjs.com/package/vue-letter), can be installed with `yarn add vue-letter` or `npm install vue-letter`.

## Usage

```
<template>
  <div id="app">
    <Letter html="<script>test</script> hello <h1>world</h1>" />
  </div>
</template>

<script>
import Letter from "react-letter";

export default {
  name: "App",
  components: {
    Letter,
  },
};
</script>
```
