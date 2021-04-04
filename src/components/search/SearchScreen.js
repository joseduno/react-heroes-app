import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ({history}) => {

    /* Este componente muestra como recibir información desde la url con query params */

    // obtiene la informacion de la url y la parsea como objeto
    // si q es undefined, se le asigna el string vacio ''
    const {search} = useLocation('search')
    const { q = '' } = queryString.parse(search)

    const [{searchText}, handleChange] = useForm({searchText: q})
    
    // const heroesFiltered = getHeroByName(searchText)
    const heroesFiltered = useMemo(() => getHeroByName(q), [q])

    const handleSearch = e => {
        e.preventDefault()
        // Al ejecutar el formulario, se agrega un query params por url
        history.push(`?q=${searchText}`)
    }


    return (
        <div className='row'>
            <div className='col-5 animate__animated animate__fadeInFast'>
                <h4>Search Form</h4>
                <hr />
                <form onSubmit={handleSearch}>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Find your hero'
                        onChange={handleChange}
                        autoComplete='off'
                        name='searchText'
                        value={searchText}
                    />
                    <button
                        type='submit'
                        className='btn btn-block btn-outline-primary mt-3'
                    >
                        Search
                    </button>
                </form>

            </div>
            <div className='col-7 animate__animated animate__fadeInRight'>
                <h4>Results</h4>
                <hr />

                {
                    (q === '')
                    &&
                    <div className='alert alert-info'>
                        Search a hero
                    </div>
                }

                {
                    (q !== '' && heroesFiltered.length === 0)
                    &&
                    <div className='alert alert-warning'>
                        Hero <b>{q}</b> was not found
                    </div>
                }


                {
                    heroesFiltered.map(hero => (<HeroCard key={hero.id} {...hero} />))
                }
            </div>
        </div>
    )
}
