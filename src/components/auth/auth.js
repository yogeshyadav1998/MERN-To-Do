import React, { Component } from 'react';

import './auth.css'

class auth extends Component {
    state={
        signup:false,
        name:'',
        email:'',
        password:''
    }
    
    switchauthmodehandler = () =>{
        this.setState(prevstate =>{
            return {signup: !prevstate.signup}
        })
    }

    inputchangehandler = input => event =>{
        event.preventDefault();
        this.setState({[input]: event.target.value});
    }

    submithandler = () =>{
        console.log(this.state.email);
        if(this.state.signup){
            const User = {
                name:this.state.name,
                email:this.state.email,
                password:this.state.password
            } 
            // axios.post('/SignUp', User)
        }
        else{
            const User = {
                email:this.state.email,
                password:this.state.password
            } 
            // axios.post('/SignIn', User)
        }
    }

    render(){
    return(
        <div className="authenticate">
                <button className="modebutton hvr-grow" onClick={this.switchauthmodehandler}>Switch to {this.state.signup ? 'SignIn' : 'SignUp'}</button>
                <br/>
                <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    value = {this.state.name}
                    onChange= {this.inputchangehandler('name')}
                    style={this.state.signup? null : {display:"none"}}
                ></input>
                <br/>
                <input
                    className="input"
                    placeholder="E-mail"
                    value = {this.state.email}
                    onChange= {this.inputchangehandler('email')}
                ></input>
                <br/>
                <input
                    className="input"
                    type="passwordss"
                    placeholder="Password"
                    value = {this.state.password}
                    onChange= {this.inputchangehandler('password')}
                ></input>
                <br/>
                <button onClick={this.submithandler} className="submitbutton hvr-grow ">{this.state.signup ? 'SignUp' : 'SignIn'}</button>
        </div>
    )
    }
}

export default auth;