# vue-letter

Vue.js port of [react-letter](https://github.com/mat-sz/react-letter).

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

## Attributes

Not all [react-letter](https://github.com/mat-sz/react-letter) properties are supported.

| Attribute   | Type    | Description                                                              |
| ----------- | ------- | ------------------------------------------------------------------------ |
| className   | String  | Class name of the wrapper div.                                           |
| html        | String  | Unsanitized e-mail HTML contents.                                        |
| text        | String  | Unsanitized e-mail text contents (fallback if html is not set or empty). |
| useIframe   | Boolean | Should the HTML be wrapped in an iframe. Default: false.                 |
| iframeTitle | String  | Iframe title, usually set to subject of the message.                     |
