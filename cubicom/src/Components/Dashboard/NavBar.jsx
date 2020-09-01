import React, {Component} from 'react';
import style from "./NavBar.module.css";
class NavBar extends Component {
    render() {
        return (
            <div className={`${style.container}`}>
                <div className={`${style.logo}`}>

                </div>
                <div className={`${style.locationDiv}`}>
                    <div className={`${style.input}`}>
                        <select>
                            <option>Location 1</option>
                        </select>
                    </div>
                    <div className={`${style.displayPicture}`}>

                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;