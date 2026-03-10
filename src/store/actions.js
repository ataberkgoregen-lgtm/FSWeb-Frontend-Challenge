export const SET_LANGUAGE = "SET_LANGUAGE"
export const SET_THEME = "SET_THEME"
export const setLanguage = (lang) => ({ type: SET_LANGUAGE, payload: lang });

export const themeSetting = (theme) => ({ type: SET_THEME, payload: theme })