import React, {Component} from 'react';
import style from "./LoginDiv.module.css";
import {postUserLoginFunction} from "../Redux/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";



class LoginDiv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            verified:false
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = ()=>{
        const {postUserLoginFunction} = this.props;
        const {email,password} = this.state;
        let obj = {
            email:email,
            password:password
        }
        console.log("clicked");
        console.log("obj is",obj);
        postUserLoginFunction(obj);
        const {isAuth} = this.props
        if(isAuth){
            this.setState({
                verified:true
            })
        }
        else{
            this.setState({
                verified:false
            })
        }

    }
    render() {
        console.log(this.state);
        const {isAuth} = this.props;
        if(isAuth){
            return (
                <Redirect to={"/dashboard"}/>
            )
        }
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
                    <input onChange={this.handleChange} name={"email"} value={this.state.email} type={"text"} placeholder={"Enter Email"}/>
                </div>
                <div className={`${style.inputDiv} ${style.flexCol}`}>
                    <p className={`${style.tagLine}`}>Password</p>
                    <input style={{border:"none"}} onChange={this.handleChange} name={"password"} value={this.state.password} type={"password"} placeholder={"Enter Password"}/>
                </div>
                <button onClick={this.handleSubmit} className={`${style.button}`}>Login</button>
            </div>
        );
    }

}


const mapStateToProps = state =>({
    isLoading:state.isLoading,
    isError:state.isError,
    message:state.message,
    isAuth:state.isAuth
})
const mapDispatchToProps =dispatch=>({
    postUserLoginFunction:payload=>dispatch(postUserLoginFunction(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginDiv);