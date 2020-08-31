import React, {Component} from 'react';
import style from "./NavBar.module.css";
class NavBar extends Component {
    render() {
        return (
            <div className={`${style.container}`}>
                NavBar
                <div>Logo</div>
                <div>Location</div>
            </div>
        );
    }
}

export default NavBar;