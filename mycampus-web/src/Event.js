import React, {Component} from 'react'
import Navigation from './Navigation';


class Event extends Component {
    render() {
        return (
            <div className="Event">
                <Navigation/>
                <div className="event_body">
                    Event
                </div>
            </div>
        )
    }
}

export default Event;