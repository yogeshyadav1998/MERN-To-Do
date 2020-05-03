import * as actiontype from './actiontypes';
import axios from 'axios';

export const toggleauthpage = () =>{
    return{
        type: actiontype.TOGGLE_AUTHPAGE
    }
};

export const authstart = () =>{
    return{
        type: actiontype.AUTH_START
    }
}

export const auth = (name, username, password, issignup) => {
    return dispatch =>{
        dispatch(authstart())
        const authdata = {
            name: name,
            usename: username,
            password: password
        }
        let url = 'http://localhost:3001/signin'
        if(issignup){
            url = 'http://localhost:3001/signup'
        }
        axios.post(url, authdata)
    }
}