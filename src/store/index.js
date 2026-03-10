import { createStore } from "redux";
import { myReducer } from "./reducer";
import initialState from "../../data";

const raw = localStorage.getItem("language");
const savedLang = raw ? JSON.parse(raw) : "tr"; // ✅ JSON.parse ile oku

export const myStore = createStore(
    myReducer,
    initialState[savedLang]
);
