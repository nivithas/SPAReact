import React from 'react';
import {CSSTransition} from 'react-transition-group';


class Home extends React.Component {
    render() { 
        return ( 
            <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
                enter={false}
                >
                <div>Am at Home</div>
            </CSSTransition>            
         );
    }
}
 
export default Home;