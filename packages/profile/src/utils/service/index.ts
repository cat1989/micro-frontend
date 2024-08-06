import axios from 'axios'
import type { CreateAxiosDefaults } from 'axios'

export const useService = (config: CreateAxiosDefaults = {}) => {
    return axios.create({
        timeout: 1000 * 10,
        ...config,
    })
}

export const useSignal = (() => {
    let requests: Array<() => void> = []
    window.addEventListener("beforeRouteLeave", () => {
        requests.forEach((abort) => {
            abort()
        })
        requests = []
    }, false)
    return () => {
        const abortController = new AbortController()
        requests.push(() => {
            abortController.abort()
        })
        return abortController.signal
    }
})()
