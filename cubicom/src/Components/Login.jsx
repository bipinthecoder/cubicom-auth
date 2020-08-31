import React, {Component} from 'react';
import style from "./Login.module.css";
import LoginDiv from "./LoginDiv";

class Login extends Component {
    render() {
        return (
            <div className={`${style.mainContainer}`}>
                <div className={`${style.landingContainer}`}>
                    <div className={`${style.bgImage}`}>
                    </div>
                    <div className={`${style.loginDiv}`}>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;