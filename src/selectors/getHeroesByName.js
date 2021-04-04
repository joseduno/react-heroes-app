import { heroes } from "../data/heroes"

export const getHeroByName = (name) => {

    if (name === '') {
        return []
    }
    
    return heroes.filter(hero => {
        return hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    })
}