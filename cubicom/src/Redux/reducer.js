import {POST_USER_LOGIN,POST_LOGIN_FAILURE,POST_LOGIN_SUCCESS } from "./actionTypes";
import {loadData,saveData} from "./localStorage"
import { v4 as uuidv4 } from 'uuid';
const initState={
    isLoading:false,
    isError:false,
    message:"",
    isAuth: loadData("validity")||false
}

export const reducer = (state = initState,{type,payload})=>{
    console.log(type,payload);
    switch (type) {
        case POST_USER_LOGIN:
            return{
                ...state,
                isLoading: true,
                isError: false
            }
        case POST_LOGIN_SUCCESS:
            saveData("token",payload);
            saveData("validity",true);
            return{
                ...state,
                isLoading:false,
                isError:false,
                message:"Successful Login",
                isAuth:true,
            }
        case POST_LOGIN_FAILURE:
            saveData("token","");
            saveData("validity",false);
            return{
                ...state,
                isLoading:false,
                isError:true,
                message:"Invalid Credentials by Bipin",
                isAuth:false,
            }
        default: return {...state}
    }
}