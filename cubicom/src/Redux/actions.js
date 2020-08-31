import {POST_USER_LOGIN,POST_LOGIN_FAILURE,POST_LOGIN_SUCCESS } from "./actionTypes";

import axios from "axios";



export const postUserLogin = (payload)=>({
    type:POST_USER_LOGIN,
    payload
});
export const postUserLoginFailure = (payload)=>({
    type:POST_LOGIN_FAILURE,
    payload
});
export const postUserLoginSuccess = (payload)=>({
    type:POST_LOGIN_SUCCESS,
    payload
});

export const postUserLoginFunction = payload =>dispatch=>{
    dispatch(postUserLogin());
    // return (
        // axios
        //     .post(
        //         `https://api-stage.kyte.app/network-app/oauth/token?username=${payload.email}&password=${payload.password}&grant_type=password`, {
        //             headers: {
        //                 'Content-Type': 'application/x-www-form-urlencoded',
        //             },
        //         }, {
        //             auth: {
        //                 username: "cubicom",
        //                 password: "password",
        //             },
        //         }
        //     )
        //
        //     .then((res) => {
        //         return dispatch(postUserLoginSuccess(res))
        //     })
        //     .catch(err=>dispatch(postUserLoginFailure(err)))

        if(payload.email === "cubicom" && payload.password === "password"){
            dispatch(postUserLoginSuccess({token:"xyz"}));
        }
        else{
           dispatch(postUserLoginFailure({error:"Invalid Credentials"}));
        }
    // );

}