import React, { Component } from 'react';

import { Icon} from 'antd';
import DatePicker from 'react-custom-date-picker';

class home extends Component{
    render(){
        return(
            <div className="home">
                <div className="backgroud-video">
                    <video autoPlay loop muted className="video" >
                        <source src='videos/v.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className="content">
                    <div className="profile-photo">
                        <img src="https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                    </div>
                    <div className="name">
                        <h3>Wellcome , Rozar Skunk</h3>
                    </div>
                    <div className="heading1">
                        <h5>Explore Your Adventurous Plans For Beautiful Life.</h5>
                    </div>
                    <div className="search">
                        <div className="heading2">
                            <h4>Search Your Plans</h4>
                        </div>
                        <button className="searchweekly hvr1-wobble-horizontal">This Week Plans <Icon type="right" /></button>
                        <button className="searchbydate hvr1-wobble-horizontal">Search By Date <Icon type="right" /></button>
                    </div>
                    <div className="update">
                        <div className="heading3">
                            <h4>Update Your Plans</h4>
                        </div>
                        <button className="updateweekly hvr1-wobble-horizontal"><Icon type="left" /> Update Week Plans </button>
                        <button className="updatebydate hvr1-wobble-horizontal"><Icon type="left" /> Update By Date</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default home;