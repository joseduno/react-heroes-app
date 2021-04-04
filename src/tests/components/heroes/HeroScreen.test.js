import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { HeroScreen } from "../../../components/heroes/HeroScreen"


describe('Pruebas en componente <HeroScreen />', () => {

    const historyMock = {
        goBack: jest.fn()
    }

    
    test('debe mostrarse el redirect si no hay argumentos en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={historyMock} />    
            </MemoryRouter>
        )
        expect(wrapper.find('Redirect').exists()).toBe(true)
    })

    test('debe mostrar un hero screen si el parametro heroId existe', () => {
        const wrapper = mount(

            // Usar memory router y router para pasar parametros por url en entorno de pruebas
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroId' component={HeroScreen}/>
            </MemoryRouter>
        )
        expect(wrapper.find('.row').exists()).toBe(true)
    })

    test('debe regresar a la pantalla anterior con goBack', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path='/hero/:heroId'
                    // Así tambien se puede definir un componente en pruebas para pasar
                    // los props que necesitemos
                    component={() => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        )
        wrapper.find('button').simulate('click')
        expect(historyMock.goBack).toHaveBeenCalled()

    })

    test('debe llamar redirect si el hero no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123123123']}>
                <Route
                    path='/hero/:heroId'
                    // Así tambien se puede definir un componente en pruebas para pasar
                    // los props que necesitemos
                    component={() => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        )
        // El Redirect a pesar de ser un componente, no se renderiza en testing
        expect(wrapper.html()).toBe('')

    })
    
})
