import React, {Component} from 'react';
import Home from './Home';
import Login from './Login'
import Profile from './Profile';
import Event from './Event';
import Club from './Club';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/login' exact={true} component={Login}/>
                    <Route path='/profile' exact={true} component={Profile}/>
                    <Route path='/events' exact={true} component={Event}/>
                    <Route path='/clubs' exact={true} component={Club}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
