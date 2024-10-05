import {configureStore} from "@reduxjs/toolkit"
import {loginReducer} from "../feature/loginSlice"

export const store = configureStore({
    reducer: {
      login: loginReducer,  
    }
})