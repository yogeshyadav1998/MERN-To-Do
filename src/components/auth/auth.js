import React, { Component } from 'react';
import axios from 'axios';

import Link from 'next/link';

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
            axios.post('/SignUp', User)
        }
        else{
            const User = {
                email:this.state.email,
                password:this.state.password
            } 
            axios.post('/SignIn', User)
        }
    }

    render(){
    return(
        <div className="auth">
            <div className="backgroud-video">
                    <video autoPlay loop muted className="video" >
                        <source src='videos/v.mp4' type='video/mp4' />
                    </video>
            </div>
            <div className="content">
            <div className="auth1">
                <h1>
                    Wellcome, This is Your To-Do
                </h1>
            </div>
            <div className="authform">
                <button className="switchbutton hvr-pulse-grow" onClick={this.switchauthmodehandler}>Switch to {this.state.signup ? 'SignIn' : 'SignUp'}</button>
                <br/>
                <input
                    className="nameinput input"
                    type="text"
                    placeholder="Name"
                    value = {this.state.name}
                    onChange= {this.inputchangehandler('name')}
                    style={this.state.signup? null : {display:"none"}}
                ></input>
                <br/>
                <input
                    className="emailinput input"
                    placeholder="E-mail"
                    value = {this.state.email}
                    onChange= {this.inputchangehandler('email')}
                ></input>
                <br/>
                <input
                    className="passwordinput input"
                    placeholder="Password"
                    value = {this.state.password}
                    onChange= {this.inputchangehandler('password')}
                ></input>
                <br/>
                <button onClick={this.submithandler} className="submitbutton hvr-grow ">{this.state.signup ? 'SignUp' : 'SignIn'}</button>
            </div>
            </div>
        </div>
    )
    }
}

export default auth;