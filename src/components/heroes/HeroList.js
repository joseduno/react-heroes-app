import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <div
            className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 animate__animated animate__fadeIn'
        >
                {heroes.map(hero => <HeroCard key={hero.id} {...hero} />)}
        </div>
    )
}
