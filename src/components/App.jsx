// this is wher i will import the react files//
import React, { Component } from 'react';

// const App = (props) => {
//     let element = <h1> {props.string}</h1> // rememember to always define a element with LET// 
//     return element; //return element after you have defined it//


// }

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { //this should give me the text that i need to show on the body//
            text: 'this is My React Lab',
            name: '',
            hasLoaded: false
        }

        this.handleClick = this.handleClick.bind(this)
    }


    handleInputChange = (value) => { // this is import to get correct//
        this.setState({ name: value });
    }

    handleClick() {
        this.setState( prevState => ({
            hasLoaded: !prevState.hasLoaded
        }));
        
    }

    render() {
        let element = <h1>{this.state.text},<br />
        {this.props.string}</h1>
        return (
            <React.Fragment>
                <div>{element}</div>
                <input 
                placeholder ='enter name'
                value = {this.state.name}
                onChange = {(event) => this.handleInputChange(event.target.value)}
                />
                <br />
                <button onClick= {this.handleClick}>

                    
                </button>
            </React.Fragment>
        );
    }
}

export default App;