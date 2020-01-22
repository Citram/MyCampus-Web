import React, {Component} from 'react'
import Navigation from './Navigation';


class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <Navigation/>
                <div className="profile_body">
                    Profile
                </div>
            </div>
        )
    }
}

export default Profile;