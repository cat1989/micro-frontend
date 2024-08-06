export const useStorage = (storage) => {
    return (namespace) => {
        const getKey = (key) => [namespace, key].join(":");
        const keys = new Set([]);
        return Object.freeze({
            setItem(key, value) {
                storage.setItem(getKey(key), value);
                keys.add(key);
            },
            getItem(key) {
                return storage.getItem(getKey(key));
            },
            clear() {
                keys.forEach((key) => {
                    storage.removeItem(getKey(key));
                });
                keys.clear();
            },
            removeItem(key) {
                storage.removeItem(getKey(key));
                keys.delete(key);
            },
            get length() {
                return keys.size;
            },
        });
    };
};
export const useLocalStorage = useStorage(localStorage);
export const useSessionStorage = useStorage(sessionStorage);
