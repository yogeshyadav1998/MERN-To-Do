import React, { Component } from 'react';

// import { Icon} from 'antd';

class home extends Component{
    render(){
        return(
            <div className="home">
                    <div className="profile-photo">
                        <img src="https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                    </div>
                    <div className="name">
                        <h3>Wellcome , Rozar Skunk</h3>
                    </div>
                    <div className="home1">
                        <h5>Explore Your Adventurous Plans For Beautiful Life.</h5>
                    </div>
                    <div className="search">
                        <div className="home2">
                            <h4>Search Your Plans</h4>
                        </div>
                        <button className="searchweekly hvr1-wobble-horizontal">This Week Plans </button>
                        <button className="searchbydate hvr1-wobble-horizontal">Search By Date </button>
                    </div>
                    <div className="update">
                        <div className="home3">
                            <h4>Update Your Plans</h4>
                        </div>
                        <button className="updateweekly hvr1-wobble-horizontal">Update Week Plans </button>
                        <button className="updatebydate hvr1-wobble-horizontal">Update By Date</button>
                    </div>
            </div>
        )
    }
}

export default home;