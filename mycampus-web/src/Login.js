import React, {Component} from 'react'
import Navigation from './Navigation';


class Login extends Component {
    render() {
        return (
            <div className="Login">
                <Navigation/>
                <div className="login_body">
                    Login
                </div>
            </div>
        )
    }
}

export default Login;