import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext)
    
    // useHistory: hook del BrowserRouter as Router, se puede utilizar por
    // componentes hijos (por ejemplo para redireccionar a otra ruta)
    const history = useHistory()

    // history.replace('/login') se utiliza para redireccionar 
    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
        history.replace('/login')
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">

                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Asociaciones
                </Link>

                
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </ul>

                    <span className="navbar-text text-info me-4">
                        {user.name}
                    </span>
                        <button
                            className="nav-item nav-link btn btn-primary"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                </div>
        </nav>
    ) 
}