import React, {Component} from 'react';
import style from "./Login.module.css";
import LoginDiv from "./LoginDiv";

class Login extends Component {
    render() {
        return (
            <div className={`${style.container}`}>
                <div className={`${style.bgImage}`}>
                </div>
                <div className={`${style.loginDiv}`}>

                </div>
            </div>
        );
    }
}

export default Login;