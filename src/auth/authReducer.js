import { types } from "../types/types"

export const authReducer = (state={}, action) => {



    switch (action?.type) {
        
        case types.login:
            return {
                // No entiendo por que utilizar el operador spread
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state
        }
}