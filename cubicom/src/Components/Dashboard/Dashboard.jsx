import React, {Component} from 'react';
import NavBar from "./NavBar";
import LoginDiv from "../LoginDiv";
import style from "./Dashboard.module.css"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <div className={`${style.container}`}>
                    <NavBar/>
                    <div className={`${style.mainContent}`}>
                        <div className={`${style.sideBar}`}>
                            <div>
                                <div className={`${style.dashboard} ${style.sideBarLogos}`}></div>
                                <div className={`${style.sideBarWrite}`}>Dashboard</div>
                            </div><div>
                                <div className={`${style.operations} ${style.sideBarLogos}`}></div>
                                <div className={`${style.sideBarWrite}`}>Operations</div>
                            </div><div>
                                <div className={`${style.tracking} ${style.sideBarLogos}`}></div>
                                <div className={`${style.sideBarWrite}`}>Tracking</div>
                            </div><div>
                                <div className={`${style.reports} ${style.sideBarLogos}`}></div>
                                <div className={`${style.sideBarWrite}`}>Reports</div>
                            </div>
                            <div>
                                <div className={`${style.configs} ${style.sideBarLogos}`}></div>
                                <div className={`${style.sideBarWrite}`}>Configurations</div>
                            </div>
                        </div>
                        <div className={`${style.main}`}>Main</div>
                    </div>
                </div>
        );
    }
}

export default Dashboard;