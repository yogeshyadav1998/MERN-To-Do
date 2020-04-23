import React, { Component } from 'react';

class home extends Component{
    render(){
        return(
            <div className="home">
                <div className="header">
                    <div className="profilephoto">
                        profile photo
                    </div>
                    <div>
                        <div className="name">
                            wellcome name
                        </div>
                        <div className="heading1">
                            checkout your plans for your beautiful life.
                        </div>
                    </div>
                    <div className="login">
                        <p>SignIN/SignUp</p>
                    </div>
                </div>
                <div className="function">
                    <div className="search">

                    </div>
                    <div className="update">

                    </div>
                </div>
            </div>
        )
    }
}

export default home;