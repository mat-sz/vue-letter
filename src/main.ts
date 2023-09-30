import type { App } from 'vue';
import Letter from './Letter.vue';

export default {
  install: (app: App) => {
    app.component('Letter', Letter);
  },
};

export { Letter };
