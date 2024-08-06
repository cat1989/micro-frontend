export class EventBus {
    constructor() {
        this.listeners = {};
    }
    emit(type, ...payload) {
        if (this.listeners[type]) {
            this.listeners[type].forEach((listener) => {
                listener(...payload);
            });
        }
    }
    on(type, listener) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(listener);
    }
    off(type) {
        if (this.listeners[type]) {
            this.listeners[type] = [];
        }
    }
}
