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
    rewriteExternalLinks: Function,
    rewriteExternalResources: Function,
    allowedSchemas: Array,
  },
  computed: {
    sanitizerOptions: function () {
      const options = {
        rewriteExternalResources: this.rewriteExternalResources,
        rewriteExternalLinks: this.rewriteExternalLinks,
        allowedSchemas: this.allowedSchemas,
      };
    },
    sanitizedHtml: function () {
      return sanitize(this.html, this.text, this.sanitizerOptions);
    },
    iframeSrc: function () {
      return (
        'data:text/html;charset=utf-8,' + encodeURIComponent(this.sanitizedHtml)
      );
    },
  },
};
</script>
