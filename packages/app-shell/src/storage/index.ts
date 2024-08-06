export const useStorage = (storage: Storage) => {
    return (namespace: string) => {
        const getKey = (key: string) => [namespace, key].join(":")
        const keys: Set<string> = new Set([])
        return Object.freeze({
            setItem(key: string, value: string) {
                storage.setItem(getKey(key), value)
                keys.add(key)
            },
            getItem(key: string) {
                return storage.getItem(getKey(key))
            },
            clear() {
                keys.forEach((key) => {
                    storage.removeItem(getKey(key))
                })
                keys.clear()
            },
            removeItem(key: string) {
                storage.removeItem(getKey(key))
                keys.delete(key)
            },
            get length() {
                return keys.size
            },
        })
    }
}

export const useLocalStorage = useStorage(localStorage)
export const useSessionStorage = useStorage(sessionStorage)
