<template>
  <div v-if="!useIframe" v-bind:class="[className]" v-html="sanitizedHtml" />
  <iframe v-if="useIframe" v-bind:class="[className]" v-bind:src="iframeSrc" />
</template>

<script>
import { sanitize } from 'react-letter';

export default {
  name: 'Letter',
  props: {
    className: String,
    html: String,
    text: String,
    useIframe: Boolean,
  },
  computed: {
    sanitizedHtml: function () {
      return sanitize(this.html, this.text);
    },
    iframeSrc: function () {
      return (
        'data:text/html;charset=utf-8,' + encodeURIComponent(this.sanitizedHtml)
      );
    },
  },
};
</script>
