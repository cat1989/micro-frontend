export const getURL = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.addEventListener("load", () => {
            resolve(xhr.responseText);
        }, false);
        xhr.addEventListener("error", (e) => {
            reject(e);
        }, false);
        xhr.send(null);
    });
};
