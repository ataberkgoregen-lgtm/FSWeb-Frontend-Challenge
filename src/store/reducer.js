import initialState from "../../data";
import { SET_LANGUAGE } from "./actions";


export function myReducer(state = initialState.tr, action) {

    switch (action.type) {
        case SET_LANGUAGE:

            return initialState[action.payload];

        default:
            return state;
    }
}
