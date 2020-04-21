<template>
  <div v-bind:class="[className]" v-html="sanitizedHtml" />
</template>

<script>
import { sanitize } from 'react-letter';

export default {
  name: 'Letter',
  props: {
    className: String,
    html: String,
    text: String,
  },
  computed: {
    sanitizedHtml: function () {
      return sanitize(this.html, this.text);
    },
  },
};
</script>
