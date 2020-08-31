import React, {Component} from 'react';
import NavBar from "./NavBar";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <NavBar/>
            </>
        );
    }
}

export default Dashboard;