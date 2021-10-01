import React from 'react'

const SignedInMenu = ({ logout }) => {
    return (
        <li onClick={logout}><a href="#">Logout</a></li>
    )
}

export default SignedInMenu
