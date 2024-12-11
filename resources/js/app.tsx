import '../css/app.css';
import './bootstrap';

import {createInertiaApp, usePage} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {createRoot} from 'react-dom/client';
import {PageProps} from "@/types";
import AlertError from "@/Components/alerts/AlertError";
import AlertSuccess from "@/Components/alerts/AlertSuccess";
import MainLayout from "@/Layouts/MainLayout";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';



createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
