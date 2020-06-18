<template>
  <div v-if="!useIframe" :class="[className]" v-html="sanitizedHtml" />
  <div v-else-if="useIframe" :class="[className]">
    <iframe :src="iframeSrc" :title="iframeTitle" />
  </div>
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
    iframeTitle: String,
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
