import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DcSreen } from '../components/dc/DcSreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
        {/* Los Routers hijos no tienen el componente BrowserRouter as Routes */}
            <Navbar />
            <div className='container mt-3'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/dc' component={DcSreen} />
                    <Route exact path='/hero/:heroId' component={HeroScreen} />
                    <Route exact path='/search' component={SearchScreen} />

                    <Redirect to='/marvel' />

                </Switch>
            </div>
        </>
    )
}
