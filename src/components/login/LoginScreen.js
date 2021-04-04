import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)
    const lastPath = localStorage.getItem('lastPath') || '/'

    const handleLogin = () => {

        dispatch({
            type: types.login,
            payload: {name: 'jose'}
        })

        // history.push('/')
        history.replace(lastPath)
        /* 
        a diferencia del push, la funcion replace no guarda el historial,
        Si se accede desde login y se vuelve a la pagina anterior del navegador,
        la página del login no se mostrará
         */

    }

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Ingresar
            </button>
        </div>
    )
}
