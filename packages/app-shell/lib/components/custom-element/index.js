import { AppShell, } from '../../';
if (window.customElements !== void 0) {
    class MicroApp extends HTMLElement {
        constructor() {
            super();
        }
        static get observedAttributes() {
            return [
                "name",
                "entry",
                "active-rule",
            ];
        }
        connectedCallback() {
            var _a, _b, _c;
            AppShell.register({
                name: (_a = this.getAttribute("name")) !== null && _a !== void 0 ? _a : '',
                entry: (_b = this.getAttribute("entry")) !== null && _b !== void 0 ? _b : '',
                activeRule: (_c = this.getAttribute("active-rule")) !== null && _c !== void 0 ? _c : '',
                container: this,
            });
        }
    }
    window.customElements.define("micro-app", MicroApp);
}
