export type initStateType = {
    themeId: number
}
const initState: initStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            debugger
            return {
                ...state, themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any

type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}
type ActionType = ChangeThemeIdType