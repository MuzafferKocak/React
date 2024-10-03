import {legacy_createStore as createStore} from "redux"
import { counterReducer } from "./counterReducer"

//? store erstellen
export const store = createStore(counterReducer)