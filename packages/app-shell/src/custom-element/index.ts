import {
    AppShell,
} from '../'

if (window.customElements !== void 0) {
    class MicroApp extends HTMLElement {
        constructor() {
            super()
        }

        static get observedAttributes() {
            return [
                "name",
                "entry",
                "active-rule",
                "mode",
            ]
        }

        connectedCallback() {
            const mode = this.getAttribute("mode")
            this.style.position = 'relative'
            AppShell.register({
                name: this.getAttribute("name") ?? '',
                entry: this.getAttribute("entry") ?? '',
                activeRule: this.getAttribute("active-rule") ?? '',
                container: this,
                mode: (mode && [
                    "default",
                    "shadow",
                    "strict",
                ].includes(mode) ? mode : "default") as "default" | "shadow" | "strict",
            })
        }
    }

    window.customElements.define("micro-app", MicroApp)
}
