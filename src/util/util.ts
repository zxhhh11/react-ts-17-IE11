import { HistoryBase } from './common'
import { getSessionStorage } from './storage'

export function getUserInfo(history: HistoryBase) {
    const authToken = getSessionStorage('authToken')
    if (authToken) {
        return authToken
    } else {
        history.push('/login')
        return {}
    }
}
export function arrayFindDeep(arr: any, key: any, value: any) {
    for (let i = 0; i < arr.length; i += 1) {
        const item = arr[i]
        if (arr[i][key] === value) {
            return arr[i]
        } else if (item.children) {
            const menu: any = arrayFindDeep(item.children, key, value)
            if (menu) {
                return menu
            }
        }
    }
}
