export const debounce = (cb, timeout = 1000) => {
    let timer;
    return (...args) => {
        if (!timer) {
            cb(args)
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null
        }, timeout)
    };
}