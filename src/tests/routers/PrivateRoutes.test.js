import { mount, shallow } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { PrivateRoute } from "../../routers/PrivateRoute"

/* Meconfunde un poco el use de ...rest y props */

describe('Pruebas en <PrivateRoute />', () => {
    test('Debe mostrar el componente si está autenticado y guardar localStorage', () => {
        const props = {
            location: {
                pathname: '/marvel'
            }
        }

        // Para emular el localStorage en las pruebas de javascript
        Storage.prototype.setItem = jest.fn()


        const wrapper = mount(
            /*
            Invariant failed: You should not use <Route> outside a <Router>

            Este error ocurre porque los <Route></Route> no pueden estar fuera de
            un componente <Router></Router>, para evitar este error
            en las pruebas se usa <MemoryRouter></MemoryRouter>
            */
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={true}
    
                    // cualquier componente,
                    // recuerda que los compoentes son funciones que retornan etiquetas html
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        )
        // No puedo usar el shallow porque el componente <MemoryRouter></MemoryRouter>
        // tiene un componente anidado <PrivateRoute></PrivateRoute> que shallow no renderiza
        // Debe usarse mount de enzyme pero no funciona con React version 17
        
        expect(wrapper.find('span').exists()).toBe(true)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })
    
    // falta el test que pruebe que el componente no se renderice si no está autenticado
    
})
