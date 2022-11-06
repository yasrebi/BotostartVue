import {createApp} from 'vue';
import App from './App.vue';
import router from './router.js';
import store from '@/store/index.js';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
