import React, { Component } from 'react';

import './auth.css'

class auth extends Component {
    state={
        signup:false,
        name:'',
        username:'',
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
            
        }
        else{
            
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
                    placeholder="Username"
                    value = {this.state.username}
                    onChange= {this.inputchangehandler('username')}
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