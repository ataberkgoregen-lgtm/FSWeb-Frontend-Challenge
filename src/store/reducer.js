import initialState from "../../data";
import { SET_LANGUAGE, SET_THEME } from "./actions";


export function myReducer(state = initialState.tr, action) {

    switch (action.type) {
        case SET_LANGUAGE:
            return initialState[action.payload];
        default:
            return state;
    }
}
