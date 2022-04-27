import React from 'react'
import {Link, NavLink} from "react-router-dom";
import "./styled.css"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions"
import {Navigate} from "react-router-dom";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    // const logout = () => {
    //   dispatch(logout())
    // }

    return(
        <header className="header">
            <div style={{display: 'flex'}}>
                <div className="logo">
                    <img src="https://cdn.clipartsfree.net/vector/medium/72996-grey-silhouette-of-man-images.png"/>
                </div>
                <div className= "nameUser" >
                    {auth.authenticated ? `${auth.firstName} ${auth.lastName}` : ''}
                </div>
                {
                    !auth.authenticated ?
                        <ul className="leftMenu">
                            <li><NavLink to={'/login'}>Login</NavLink></li>
                            <li><NavLink to={'/signup'}>Sign up</NavLink></li>
                        </ul> : null
                }

            </div>

            <ul className="menu">

                {
                    auth.authenticated ?
                        <li>
                            <Link to={'#'} onClick={() => {
                                dispatch(logout(auth.uid))
                            }}>Logout</Link>
                        </li> : null
                }
            </ul>
        </header>
    )

}

export default Header