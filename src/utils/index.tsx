export const getLocalStorage = (name: string) => {
    return localStorage.getItem(name)
}

export const setLocalStorage = (name: string, value: string) => {
    localStorage.setItem(name, value)
}

export const removeLocalStorage = (name: string) => {
    localStorage.removeItem(name);
}

export const clearLocalstorage = () => {
    localStorage.clear();
}

export const isDarkTheme = () => {
    return localStorage.getItem('theme') === "dark"
}