<script setup lang="ts">
import { reactive } from 'vue';
import { sanitize } from 'lettersanitizer';

interface Props {
  className: string;
  html: string;
  text: string;
  useIframe: boolean;
  iframeTitle: string;
  rewriteExternalLinks: (url: string) => string;
  rewriteExternalResources: (url: string) => string;
  allowedSchemas: string[];
  preserveCssPriority: boolean;
}

const props = withDefaults(defineProps<Props>(), {});

const {
  className,
  html,
  text,
  useIframe,
  iframeTitle,
  rewriteExternalLinks,
  rewriteExternalResources,
  allowedSchemas,
  preserveCssPriority,
} = reactive(props);

const sanitizerOptions = {
  rewriteExternalResources,
  rewriteExternalLinks,
  allowedSchemas,
  preserveCssPriority,
};

const sanitizedHtml = sanitize(html, text, sanitizerOptions);

const iframeSrc =
  'data:text/html;charset=utf-8,' + encodeURIComponent(sanitizedHtml);
</script>

<template>
  <div v-if="!useIframe" :class="[className]" v-html="sanitizedHtml" />
  <div v-else-if="useIframe" :class="[className]">
    <iframe :src="iframeSrc" :title="iframeTitle" />
  </div>
</template>
