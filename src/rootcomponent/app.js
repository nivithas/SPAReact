import React from 'react';
import Menu from '../spa/menu/menu';

class App extends React.Component {
    render() { 
        return ( 
        <div>
            <div><Menu></Menu></div>
            <div>I will be the content</div>
        </div> );
    }
}
 
export default App;