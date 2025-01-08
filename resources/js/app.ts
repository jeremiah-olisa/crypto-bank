import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, DefineComponent, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

import { createPinia } from "pinia";
import { createNotivue } from "notivue";
import VueApexCharts from "vue3-apexcharts";

import "simplebar-vue/dist/simplebar.min.css";
import "notivue/notification.css";
import "notivue/animations.css";
import "nprogress/nprogress.css";



const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(createPinia())
            .use(VueApexCharts)
            .use(createNotivue())
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
