import { VueQueryPlugin } from '@tanstack/vue-query';

export default {
  install: app => {
    app.use(VueQueryPlugin);
  },
};
