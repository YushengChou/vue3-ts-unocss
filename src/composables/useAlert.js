import { createApp, h } from 'vue';
import Alert from '@/pages/common/Alert.vue';
export function useAlert() {
    const show = (message, type = 'info') => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const app = createApp({
            render: () => h(Alert, { message, type, onClose: () => app.unmount() }),
        });
        app.mount(container);
    };
    return { show };
}
//# sourceMappingURL=useAlert.js.map