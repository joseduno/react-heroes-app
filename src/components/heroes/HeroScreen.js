import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({history}) => {

    // hook del react-router-dom para obtener parametros por url
    const {heroId} = useParams()
    
    const hero = getHeroById(heroId)

    if (!hero) {
        return <Redirect to='/' />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero

    const handleReturn = () => {
        history.goBack()
    }

    return (
        <div className='row mt-5'>
            <div className='col-4 animate__animated animate__fadeInLeft'>
                <img 
                    src={`../assets/heroes/${heroId}.jpg`}
                    className='img-thumbnail'
                    alt={superhero}
                />
            </div>
            <div className='col-8 animate__animated animate__fadeIn'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush mb-3'>
                    <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                    <li className='list-group-item'><b>First appearance: </b>{first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>
                <button
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
            
        </div>
    )
}
