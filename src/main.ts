import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import '@/assets/fonts/index.css';

createApp(App).use(router).mount('body');
