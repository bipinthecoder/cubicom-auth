import React, {Component} from 'react';
import style from "./LoginDiv.module.css";

class LoginDiv extends Component {
    render() {
        return (
            <div className={`${style.container}`}>
                <div className={`${style.flexRow}`}>
                    <div className={`${style.welcome}`}>Welcome to</div>
                    <div className={`${style.logoDiv}`}>
                    </div>
                </div>
                <div className={`${style.tagLine}`}>
                    we make easy for everyone to manage <br></br> logistic operations
                </div>

                <div className={`${style.inputDiv} ${style.flexCol}`}>
                    <p className={`${style.tagLine}`}>Email</p>
                    <input type={"text"} placeholder={"Enter Email"}/>
                </div>
                <div className={`${style.inputDiv} ${style.flexCol}`}>
                    <p className={`${style.tagLine}`}>Password</p>
                    <input type={"text"} placeholder={"Enter Password"}/>
                </div>
                <button className={`${style.button}`}>Login</button>
            </div>
        );
    }
}

export default LoginDiv;