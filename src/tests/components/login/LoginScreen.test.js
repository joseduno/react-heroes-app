import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext"
import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from "../../../types/types"


describe('Pruebas en el componente <LoginScreen />', () => {

    const historyMock = {replace: jest.fn()}

    const contextValue = {
        user: {logged: false},
        dispatch: jest.fn()
    }

    Storage.prototype.getItem = jest.fn()

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={historyMock} />
        </AuthContext.Provider>
    )

    const handleLogin = wrapper.find('button').prop('onClick')

    test('debe mostrarse correctamente con usuario no autenticado', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe llamar al dispatch y redireccionar a / sin valor en localStorage', () => {
        
        handleLogin()
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: expect.any(Object)
        })
        expect(historyMock.replace).toHaveBeenCalledWith('/')

    })
    
})
