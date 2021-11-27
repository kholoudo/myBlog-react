import React, { Component } from 'react'
import{Link} from 'react-router-dom'

class Login extends Component {

  constructor(props){
    super(props)
    this.state={
        name:"",
        password:""
  

    }
}

handleChange=(event,state)=>{
  this.setState({
      [state]:event.target.value})
  }


handleSubmit=(event)=>{
    event.preventDefault()
    

    if(this.state.name===localStorage.getItem("name")&& this.state.password===localStorage.getItem("password")){
      return(
        <Link to="/blog"></Link>,
      alert("welcome" +" "+ this.state.name))
    }else{
      return(
      alert("You Are not registered"))

    }
    
}
  render(){
    return(
    <div className="form">
    <form className="login-form" onSubmit={this.handleSubmit}>
        <label>UserName</label>
      <input type="text" id="login" class="inputs1" inputName="login" placeholder="enter your username" value={this.state.name} onChange={(e)=>this.handleChange(e,"name")}/>
      <label>PassWord</label>
      <input type="password" id="password" class="inputs1" inputName="password" placeholder="enter your password"value={this.state.password} onChange={(e)=>this.handleChange(e,"password")}/>
      <input type="submit" class="sumbit" value="Log In" />
    </form>
</div>)}
     
    }
    export default Login;

   