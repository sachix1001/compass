import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { theme } from './theme';
import '@mdi/font/css/materialdesignicons.css';

export default createVuetify({
  components,
  directives,
  theme,
  icons: {
    defaultSet: 'mdi',
  },
});
