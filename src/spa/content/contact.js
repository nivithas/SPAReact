import React from 'react';
import {CSSTransition} from 'react-transition-group';
import ReactTransitions from 'react-transitions';
class Contact extends React.Component {
    state = {  }
    render() { 
        return ( 
            <ReactTransitions
            transition="move-to-left-move-from-right"
            width={ 600 }
            height={ 300 }
            >
            <div>
            Call me at 2255
        </div>
        </ReactTransitions> );
    }
}
 
export default Contact;