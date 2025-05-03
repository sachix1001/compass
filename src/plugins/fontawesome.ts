import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faCircleUser);

export default {
  install: (app) => {
    app.component('font-awesome-icon', FontAwesomeIcon);
  },
};
