export const formatTime = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours}:${getMinutes}:${getSeconds}`
}

export const getTimeDiffInSec = (startTime) => {
    const unixNow = Date.now()
    const unixStartTime = new Date(startTime).getTime()
    const diff = Math.floor((unixNow - unixStartTime) / 1000)

    return diff
}

export function formatDate (t, a) {
    return a.map((m) => {
        if (typeof m === 'string') {
            return m;
        }
        let f = new Intl.DateTimeFormat('en', m);
        return f.format(t);
    }).join('');
}