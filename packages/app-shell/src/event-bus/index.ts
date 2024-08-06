export class EventBus {
    private listeners: Record<string, Array<(...args: any[]) => {}>> = {};

    emit(type: string, ...payload: any[]) {
        if (this.listeners[type]) {
            this.listeners[type].forEach((listener) => {
                listener(...payload)
            })
        }
    }

    on(type: string, listener: (...args: any[]) => {}) {
        if (!this.listeners[type]) {
            this.listeners[type] = []
        }
        this.listeners[type].push(listener)
    }

    off(type: string) {
        if (this.listeners[type]) {
            this.listeners[type] = []
        }
    }
}
