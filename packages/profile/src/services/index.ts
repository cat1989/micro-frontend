import { useService, useSignal } from '@/utils/service'

export const users = ((service) => {
    return {
        get() {
            return service.get('/', {
                signal: useSignal(),
            }).then((res) => res.data)
        },
    }
})(useService({
    baseURL: '//localhost:10086/api/users',
}))
