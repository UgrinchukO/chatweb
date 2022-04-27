import React from 'react'
import "./styled.css"

/**
 * @author
 * @function RegisterPage
 **/

const Card = (props) => {

    return (
        <div className="card">
            {props.children}
        </div>
    )
}

export default Card