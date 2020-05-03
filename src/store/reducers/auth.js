import React from 'react';
import * as actiontype from './../actions/actiontypes';

const initialstate = {
    authpage: false,
    loading: false
}

const authreducer = (state=initialstate,action) =>{
    switch(action.type){
        case(actiontype.TOGGLE_AUTHPAGE):
        return{
            ...state,
            authpage: !state.authpage
        }
        case(actiontype.AUTH_START):
        return{
            ...state,
            loading: true,
        }
        default:
            return state;
    }
}

export default authreducer ;