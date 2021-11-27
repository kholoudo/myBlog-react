import React from 'react'
import { Component } from 'react'
import Login from './LogForm'
import {Link} from'react-router-dom'

class RegForm extends Component {
constructor(props){
    super(props)
    this.state={
        name:"",
        password:"",
        email:""
    }
}



handleChange=(event,state)=>{
this.setState({
    [state]:event.target.value})
}


handleSubmit=(event)=>{
    event.preventDefault()
    alert(this.state.name)
    localStorage.setItem("name",this.state.name)
    localStorage.setItem("password",this.state.password)
    localStorage.setItem("email",this.state.email)

}

render() {
    return (
        <div className="RegForm">
    <form  className="RegForm1" onSubmit={this.handleSubmit}>

    <input type="text"  className="inputs"  value={this.state.name} onChange={(e)=>this.handleChange(e,"name")} placeholder="Username"/>
  
    <input value={this.state.password} type="password" className="inputs"   onChange={(e)=>this.handleChange(e,"password")} placeholder="Password"/>
   
    <input type="text" className="inputs" value={this.state.email} onChange={(e)=>this.handleChange(e,"email")} placeholder="Email"/>

<button type="Submit" className="regBtn" >Submit</button>
<Link to="/login"><button  className="regBtn" >Already have an account?</button></Link>
    </form></div>)}}
    export default RegForm
