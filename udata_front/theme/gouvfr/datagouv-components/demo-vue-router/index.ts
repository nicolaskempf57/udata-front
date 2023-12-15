import "@gouvfr/dsfr/dist/dsfr.min.css";
import "@gouvfr/dsfr/dist/utility/utility.min.css";
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";

import { setupI18n } from '../src';

import App from '../demo/App.vue';
import Dataset from "./Dataset.vue";
import View from "./View.vue";

const routes = [
    { path: '/', component: App },
    {
        path: '/datasets/:did',
        name: 'dataset_detail',
        component: Dataset,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const i18n = setupI18n();

createApp(View)
.use(i18n)
.use(router)
.mount('#app');
