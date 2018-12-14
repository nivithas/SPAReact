import React from 'react';

class Friends extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <li>{this.props.name} {this.props.year} {this.props.location}</li>
            </div>
          );
    }
}
 
export default Friends;