import React, {Component} from 'react'
import Navigation from './Navigation';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Navigation/>
                <div className="home_body">
                    Home
                </div>
            </div>
        )
    }
}

export default Home;