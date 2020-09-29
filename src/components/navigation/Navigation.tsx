import React, { FC, useContext } from 'react';
import AuthContext from '../../auth/AuthContext';
import { Link } from 'react-router-dom';

export const Navigation: FC = () => {
    const authContext = useContext(AuthContext);
    console.log(authContext)
    return (
        <nav>
            <Link to="/">Home</Link>

            <button onClick={() => {
                if (authContext && authContext.login) {
                    authContext.login();
                }
            }}>Login</button>
        </nav>
    )
}