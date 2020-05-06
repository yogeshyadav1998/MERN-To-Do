import React, { Component } from 'react';
import {connect} from 'react-redux';

import './home.css';

class home extends Component{
    render(){
        return(
            <div className="home">
                    <div className="name">
                    <h3>Wellcome , {this.props.name}</h3>
                    </div>
                    <div className="home1">
                        <h5>Explore Your Adventurous Plans For Beautiful Life.</h5>
                    </div>
                    <div className="search">
                        <div className="home2">
                            <h4>Search Your Plans</h4>
                        </div>
                        <button className="searchweekly hvr-wobble-horizontal">This Week Plans </button>
                        <button className="searchbydate hvr-wobble-horizontal">Search By Date </button>
                    </div>
                    <div className="update">
                        <div className="home3">
                            <h4>Update Your Plans</h4>
                        </div>
                        <button className="updateweekly hvr-wobble-horizontal">Update Week Plans </button>
                        <button className="updatebydate hvr-wobble-horizontal">Update By Date</button>
                    </div>
            </div>
        )
    }
}

const mapStatetoProp = state =>{
    return {
        name: state.auth.name
    }
}

const mapDispatchToProps = dispatch =>{
    return{

    }
}

export default connect(mapStatetoProp,mapDispatchToProps)(home);