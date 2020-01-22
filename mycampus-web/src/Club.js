import React, {Component} from 'react'
import Navigation from './Navigation';


class Club extends Component {
    render() {
        return (
            <div className="Club">
                <Navigation/>
                <div className="club_body">
                    Club
                </div>
            </div>
        )
    }
}

export default Club;