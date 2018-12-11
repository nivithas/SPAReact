import React from 'react';
import {CSSTransition} from 'react-transition-group';
class About extends React.Component {
    state = {  }
    render() { 
        return ( 
            <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
            enter={false}
            >
            <div>
            All you want to know
        </div>
        </CSSTransition> );
    }
}
 
export default About;