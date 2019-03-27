import React from 'react';
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header style = {headerStyle}>Todo 
        List
        <br/>
        <Link to="/" style={linkStyle}>Home</Link>|<Link to ="/about" style={linkStyle}>About</Link>
        </header>
    )
}
const headerStyle = {
    padding: '10px',
    background: '#333',
    color:'#fff',
    textAlign:'center'

}
const linkStyle = {
    color:'#fff',
    textDecoration:'none'
}
export default Header;