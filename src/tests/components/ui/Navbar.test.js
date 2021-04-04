import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import { AuthContext } from "../../../auth/AuthContext"
import { Navbar } from "../../../components/ui/Navbar"
import { types } from "../../../types/types"


describe('Pruebas en el Navbar', () => {

    // Para emular el uso del useHistory, el componente que lo usa debe estar envuelto
    // en una etiqueta <Router history={historyMock}></Router> para que funcione la
    // prueba
    const historyMock = {
        location: {},
        replace: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {logged: true, name: 'test'}
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue} >
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('test')
    })

    test("debe llamar dispatch y usar el history.replace('/')", () => {
        wrapper.find('button').simulate('click')
        expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout})
        expect(historyMock.replace).toHaveBeenCalledWith('/login')

    })
    
})
