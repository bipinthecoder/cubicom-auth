import React, { Component } from 'react';
import Routes from "./Routes/Routes";
import Login from "./Components/Login";


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            login:false,
            reg:false
        }
    }

    render(){
        return (
            <Routes/>
        )
    }
}

export default App;
