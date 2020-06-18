import Vue, { PropType } from 'vue';
import { sanitize, SanitizerOptions } from 'react-letter';
import { VueConstructor } from 'vue/types/umd';

interface ILetter extends Vue {
  className: string;
  html: string;
  text: string;
  useIframe: boolean;
  iframeTitle: string;
  rewriteExternalLinks: (url: string) => string;
  rewriteExternalResources: (url: string) => string;
  allowedSchemas: string[];
  sanitizerOptions: SanitizerOptions;
  sanitizedHtml: string;
  iframeSrc: string;
}

export default (Vue as VueConstructor<ILetter>).extend({
  name: 'Letter',
  props: {
    className: String,
    html: String,
    text: String,
    useIframe: Boolean,
    iframeTitle: String,
    rewriteExternalLinks: Function as PropType<(url: string) => string>,
    rewriteExternalResources: Function as PropType<(url: string) => string>,
    allowedSchemas: Array as PropType<string[]>,
  },
  computed: {
    sanitizerOptions: function (): SanitizerOptions {
      return {
        rewriteExternalResources: this.rewriteExternalResources,
        rewriteExternalLinks: this.rewriteExternalLinks,
        allowedSchemas: this.allowedSchemas,
      };
    },
    sanitizedHtml: function (): string {
      return sanitize(this.html, this.text, this.sanitizerOptions);
    },
    iframeSrc: function (): string {
      return (
        'data:text/html;charset=utf-8,' + encodeURIComponent(this.sanitizedHtml)
      );
    },
  },
});