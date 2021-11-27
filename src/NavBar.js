import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Link} from 'react-router-dom' 


class NavBar extends Component{

    render(){

        return(

<div className="navBar" >
<div className='logoDiv'><img src="logo1.png" className="App-logo" alt="logo" /> </div>
<ul className="navList">
<li className="item"><Link to="/">Home</Link></li>
<li className="item"><Link to="/about">About</Link></li>
<li className="item"><Link to="/blog">BloG</Link></li>
<li className="item"><Link to="/contact">Contact</Link></li>
<li className="item"><Link to="/login">Login</Link></li>
<li className="item"><Link to="/register">Register</Link></li>



</ul>

</div>)
        
    }}export default NavBar


