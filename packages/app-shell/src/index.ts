import {
    createBrowserHistory,
} from 'history'
import {
    getURL,
} from './utils/fetch'
import {
    serial,
} from './utils/promise'
import {
    useLocalStorage,
    useSessionStorage,
} from './storage'

type Nullable<T> = T | null

export type Application = {
    name: string;
    entry: string;
    container: HTMLElement;
    activeRule: string;
    mode?: 'default' | 'strict' | 'shadow';
}

type MountOptions = {
    container: HTMLElement;
    base: string;
}

export type MicroApp = {
    bootstrap: () => void;
    mount: (options: MountOptions) => void;
    unmount: () => void;
}

const useRouter = () => {
    const history = createBrowserHistory()
    const onClick = (e: MouseEvent) => {
        if (e.target) {
            const {
                tagName,
            } = e.target as HTMLElement
            if (tagName === 'A') {
                e.preventDefault()
                history.push((e.target as HTMLAnchorElement).href)
            }
        }
    }
    window.addEventListener("click", onClick, false)
    // return () => {
    //     window.removeEventListener("click", onClick, false)
    // }
    return history
}

// http://localhost:8080/index/1?id=1#about
// origin: http://localhost:8080
// protocol: http:
// port: 8080
// host: localhost:8080
// hostname: localhost
// pathname: /index/1
// search: ?id=1
// hash: #about
const changeOrigin = (href: string | null, origin: string) => {
    if (href) {
        // FIXME: no protocol
        const url = new URL(href, origin)
        return url.href
        // const {
        //     pathname,
        //     search,
        //     hash,
        // } = url
        // console.log(`${origin}${pathname}${search}${hash}`)
        // return `${origin}${pathname}${search}${hash}`
    }
    else {
        return ''
    }
    // const archor = document.createElement("a")
    // const url1 = new URL(url)
    // console.log({url1})
    // archor.setAttribute("href", url)
    // const {
    //     pathname,
    //     search,
    //     hash,
    // } = archor
    // console.log(url, pathname)
    // const href = `${origin}${pathname}${search}${hash}`
    // archor.remove()
    // return href
}

const loadMicroApp = (application: Application) => {
    const module = window[application.name as keyof Window] as MicroApp
    if (module) {
        const container = document.createElement("div")
        return {
            application,
            module,
            container,
        }
    }
    return null
}

export const AppShell = (() => {
    const applications: Application[] = []
    const router = useRouter()
    const loaded: string[] = []
    let current: Nullable<{
        application: Application;
        module?: MicroApp;
        container: HTMLElement;
    }> = null
    const listeners: Record<string, (height: number) => void> = {}
    window.addEventListener("message", (e) => {
        if (e.data.type === 'reset') {
            const {
                height,
                name,
            } = e.data.payload
            if (listeners[name]) {
                listeners[name](height)
            }
        }
    }, false)
    const events: Record<string, Array<() => {}>> = {}
    const AppShell = Object.freeze({
        register(application: Application) {
            const {
                name,
            } = application
            if (applications.findIndex((application) => application.name === name) === -1) {
                applications.push(application)
            }
        },
        load(name: string) {
            const application = applications.find((application) => application.name === name)
            if (application) {
                router.push(application.activeRule)
            }
            else {
                // TODO
            }
        },
        history: router,
        on(type: string, callback: () => {}) {
            if (!events[type]) {
                events[type] = []
            }
            events[type].push(callback)
        },
    })
    router.listen(({ location }) => {
        const {
            pathname,
        } = location
        const application = applications.find(({ activeRule }) => pathname.startsWith(activeRule))
        if (application) {
            console.log(`switch to micro-app: ${application.name}`)
            // 本地存储隔离
            const sessionStorage = useSessionStorage(application.name)
            Object.defineProperty(window, "sessionStorage", {
                get() {
                    return sessionStorage
                },
            })
            const localStorage = useLocalStorage(application.name)
            Object.defineProperty(window, "localStorage", {
                get() {
                    return localStorage
                },
            })
            if (current) {
                if (current.application.name === application.name) {
                    return
                }
                if (current.application.mode === 'strict') {
                    const name = current.container.getAttribute("name")
                    if (name && listeners[name]) {
                        delete(listeners[name])
                    }
                }
                current.module?.unmount?.()
                current.container.remove()
                current.application.container.style.display = 'none'
            }
            if (events["beforeRouteLeave"]) {
                events["beforeRouteLeave"].forEach((callback) => {
                    callback()
                })
            }
            let root: HTMLElement | ShadowRoot = application.container
            if (application.mode === 'shadow') {
                if (!application.container.shadowRoot) {
                    application.container.attachShadow({
                        mode: 'open',
                    })
                }
                root = application.container.shadowRoot as ShadowRoot
            }
            else if (application.mode === 'strict') {
                const name = 'abc'
                const iframe = document.createElement("iframe")
                iframe.style.border = 'none'
                iframe.setAttribute("src", application.entry)
                iframe.setAttribute("name", name)
                iframe.style.visibility = 'hidden'
                iframe.style.position = 'absolute'
                iframe.style.top = '0px'
                iframe.style.left = '0px'
                iframe.style.width = '100%'
                iframe.style.height = '100%'
                application.container.appendChild(iframe)
                listeners[name] = (height: number) => {
                    // iframe.style.height = `${height}px`
                    iframe.style.visibility = 'visible'
                }
                const onLoad = () => {
                    application.container.style.display = 'block'
                    iframe.contentWindow?.postMessage({
                        type: 'reset',
                        payload: {
                            name,
                        },
                    }, '*')
                    iframe.removeEventListener("load", onLoad, false)
                }
                iframe.addEventListener("load", onLoad, false)
                current = {
                    application,
                    container: iframe,
                }
            }
            const onLoad = () => {
                const microApp = loadMicroApp(application)
                if (microApp) {
                    application.container.style.display = 'block'
                    current = microApp
                    root.appendChild(current.container)
                    microApp.module.bootstrap?.()
                    if (microApp.module.mount) {
                        microApp.module.mount({
                            container: current.container,
                            base: application.activeRule,
                        })
                    }
                }
            }
            if (!loaded.includes(application.name)) {
                loaded.push(application.name)
                if (application.mode === 'strict') {
                    return
                }
                getURL(application.entry).then((response) => {
                    // const element = document.createElement("div")
                    // element.innerHTML = response
                    const domParser = new DOMParser()
                    const element = domParser.parseFromString(response, "text/html")
                    const scripts = element.querySelectorAll("script")
                    const links = element.querySelectorAll("link")
                    // const styles = element.querySelectorAll("style")
                    // Array.from(styles).forEach((style) => {
                    //     console.log({style})
                    // })
                    Array.from(links).filter(({ rel }) => rel === 'stylesheet').forEach(({
                        href,
                    }) => {
                        const link = document.createElement("link")
                        link.setAttribute("rel", "stylesheet")
                        link.setAttribute("crossorigin", "anonymous")
                        link.setAttribute("href", changeOrigin(href, application.entry))
                        link.addEventListener("load", () => { 
                            console.log(`stylesheet loaded finish: ${link.href}`)
                            if (root instanceof ShadowRoot) {
                                const fontFaces: CSSStyleDeclaration[] = []
                                Array.from(root.styleSheets).forEach((stylesheet) => {
                                    if (stylesheet.cssRules) {
                                        Array.from(stylesheet.cssRules).forEach((rule) => {
                                            if (rule.type === CSSRule.FONT_FACE_RULE) {
                                                fontFaces.push((rule as CSSFontFaceRule).style)
                                            }
                                        })
                                    }
                                })
                                fontFaces.forEach((fontFace) => {
                                    const fontFamily = fontFace.getPropertyValue("font-family")
                                    const src = fontFace.getPropertyValue("src")
                                    new FontFace(fontFamily, src).load().then((fontFace) => {
                                        document.fonts.add(fontFace)
                                    })
                                })
                            }
                        }, false)
                        // link.addEventListener("error", () => {
                            
                        // }, false)
                        // document.head.appendChild(link)
                        root.appendChild(link)
                    })
                    serial(Array.from(scripts).map((ele) => {
                        return () => new Promise((resolve, reject) => {
                            const script = document.createElement("script")
                            script.setAttribute("src", changeOrigin(ele.getAttribute("src"), application.entry))
                            script.addEventListener("load", () => {
                                console.log(`script loaded finish: ${script.src}`)
                                // script.remove()
                                resolve(void 0)
                            }, false)
                            script.addEventListener("error", (e) => {
                                reject()
                            }, false)
                            // document.body.appendChild(script)
                            root.appendChild(script)
                        })
                    })).then(onLoad).catch(() => {

                    })
                }).catch((e) => {
                    // TODO: load fail
                })
            }
            else {
                onLoad()
            }
        }
        else {
            // TODO: not found
        }
    })
    return AppShell
})()
