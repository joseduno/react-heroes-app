import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"


describe('Pruebas en el authReducer', () => {

    const testName = 'test'

    test('Debe retornar estado por defecto', () => {
        expect(authReducer()).toEqual({})
    })

    test('Debe authenticar y establecer nombre de usuario', () => {
        const action = {type: types.login, payload: {name: testName}}
        const result = authReducer({}, action)
        expect(result.logged).toBe(true)
        expect(result.name).toBe(testName)
    })

    test('Debe borrar el name del usuario y logged en false', () => {
        const action = {type: types.logout}
        const result = authReducer({}, action)
        expect(result.logged).toBe(false)
    })
    
})
