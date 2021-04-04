import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import { AppRouter } from "../../routers/AppRouter"

describe('Pruebas en el AppRouter', () => {

    
    test('debe mostrar el login si el usuario no esta autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {logged: false}
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar el componente de /marvel si está autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {logged: true, name: 'test'}
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
    
    
})
