import React, {Component} from 'react';
import NavBar from "./NavBar";
import LoginDiv from "../LoginDiv";
import style from "./Dashboard.module.css";
import data from "../../utils/cardDetails.json";
import Card from "./Card";

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
                            </div>
                            <div>
                                <div className={`${style.operations} ${style.sideBarLogos}`}></div>
                                <div className={`${style.sideBarWrite}`}>Operations</div>
                            </div>
                            <div>
                                <div className={`${style.tracking} ${style.sideBarLogos}`}></div>
                                <div className={`${style.sideBarWrite}`}>Tracking</div>
                            </div>
                            <div>
                                <div className={`${style.reports} ${style.sideBarLogos}`}></div>
                                <div className={`${style.sideBarWrite}`}>Reports</div>
                            </div>
                            <div>
                                <div className={`${style.configs} ${style.sideBarLogos}`}></div>
                                <div className={`${style.sideBarWrite}`}>Configurations</div>
                            </div>
                        </div>
                        <div className={`${style.main}`}>
                            <div style={{display:"flex"}}>
                                <div className={`${style.mainTitle}`}>Dashboard</div>
                                <img className={`${style.search}`} src="search.svg" alt="search"></img>
                                <img className={`${style.cal}`} src="cal.svg" alt="search"></img>
                                <div className={`${style.date}`}>12/12/2019 - 18/12/2019</div>
                            </div>
                            <div style={{display:"flex",marginTop:"4%",marginLeft:"2%"}}>
                                <div style={{display:"flex",marginTop:"4%",marginLeft:"2%"}}>
                                    {data && data.map(item => (
                                        <Card data = {item}/>
                                    ))}
                                </div>
                                <div className={`${style.circle}`}></div>

                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Dashboard;