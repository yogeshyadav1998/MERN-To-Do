import React from 'react';
import * as actiontype from './../actions/actiontypes';

const initialstate = {
    authpage: false
}

const authreducer = (state=initialstate,action) =>{
    switch(action.type){
        case(actiontype.TOGGLE_AUTHPAGE):
        return{
            ...state,
            authpage: !state.authpage
        }
        default:
            return state;
    }
}

export default authreducer ;