import React from 'react';
import axios from 'axios';
import {CSSTransition} from 'react-transition-group';
class Contact extends React.Component {
    state = {  }
    constructor(props){
        super(props)
        this.state={
            name:"",
            location:"",
            year:"",
            submitStatus: ""
        }
        this.captureInputName =this.captureInputName.bind(this)
        this.captureInputLocation =this.captureInputLocation.bind(this)
        this.captureInputYear =this.captureInputYear.bind(this)
        this.userSubmitted =this.userSubmitted.bind(this)
    }
    userSubmitted(){
        console.log("Submitted") 
        console.log(this.state)
        axios.post("http://localhost:8888/add",this.state).then((data)=>{
            // this.setState({submitStatus: data})
            console.log(data)
        })
    }
    captureInputName(e){
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }
    captureInputLocation(e){
        console.log(e.target.value)
        this.setState({
            location: e.target.value
        })
    }
    captureInputYear(e){
        console.log(e.target.value)
        this.setState({
            year: e.target.value
        })
    }
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
            {/* Call me at 2255 */}
            <div>
                <form onSubmit={this.userSubmitted}>
                   Name: <input type="text" onChange={this.captureInputName}></input><br></br><br></br>
                   Location: <input type="text" onChange={this.captureInputLocation}></input><br></br><br></br>
                   Year: <input type="number" onChange={this.captureInputYear}></input><br></br><br></br>
                   <input type="submit" value="submit"></input>
                </form>
            </div>
            {this.state.submitStatus}
        </div>
        </CSSTransition> );
    }
}
 
export default Contact;