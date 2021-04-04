import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { SearchScreen } from "../../../components/search/SearchScreen"



describe('Pruebas en SearchScreen', () => {
    
    test('debe coincidir con el snapshot con valores por defecto', () => {
        const wrapper = mount(
            // Se necesita usar tanto el memory como el route con el mismo path en 
            // initialEntries y path respectivamente para indicar que debe renderizar un 
            // componente a partir de la url en entornos de pruebas, en este caso '/search'
            <MemoryRouter initialEntries={['/search']}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
    })

    test('debe mostrar a batman y el input con el valor batman', () => {
        const wrapper = mount(
            /*
            Otra vision de memory y route:
            En el initialEntries (MemoryRouter) se suele indicar la ruta del componente 
            que queremos probar con sus query params si es el caso, mientras que en el 
            path (Route), solo va la ruta del componente que se renderiza en ella, sin los 
            query params en caso de que los tenga
            */
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper.find('input').prop('value')).toBe('batman')
        expect(wrapper.find('HeroCard').length).toBeGreaterThanOrEqual(1)

    })

    test('debe mostrar un error si no se encuentra el hero', () => {
        
        const wrapper = mount(
            /*
            Otra vision de memory y route:
            En el initialEntries (MemoryRouter) se suele indicar la ruta del componente 
            que queremos probar con sus query params si es el caso, mientras que en el 
            path (Route), solo va la ruta del componente que se renderiza en ella, sin los 
            query params en caso de que los tenga
            */
            <MemoryRouter initialEntries={['/search?q=1jk23gb4kj123h4gv']}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper.find('.alert-warning').exists()).toBe(true)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe hacer el submit correctamente con batman en el input text', () => {

        const historyMock = {push: jest.fn()}
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=1jk23gb4kj123h4gv']}>
                <Route path='/search' component={
                    () => <SearchScreen history={historyMock} />
                } />
            </MemoryRouter>
        )
        wrapper.find('input').simulate('change', {target: {
            name: 'searchText',
            value: 'batman'
        }})
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(historyMock.push).toHaveBeenCalledWith('?q=batman')

    })
    
})
