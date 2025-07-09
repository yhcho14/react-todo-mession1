const store = window.localStorage

export function getStorage(key, data) {
    const getdata = store.getItem(key)
    if (getdata) {
        return JSON.parse(getdata)
    }
    else {
        return data
    }
}

export function setStorage(key, data) {
    store.setItem(key, JSON.stringify(data))
    return data
}
