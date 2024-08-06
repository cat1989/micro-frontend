import axios from 'axios'

export const useSignal = (() => {
    let requestes = []
    window.addEventListener("beforeRouteLeave", (e) => {
        requestes.forEach((abort) => {
            abort()
        })
        requestes = []
    }, false)
    return () => {
        const abortController = new AbortController()
        requestes.push(() => {
            abortController.abort()
        })
        return abortController.signal
    }
})()

export const useService = (config = {}) => {
    return axios.create({
        timeout: 1000 * 10,
        ...config,
    })
}
