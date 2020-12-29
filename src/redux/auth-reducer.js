import {authAPI} from "../api/api";
import { FORM_ERROR } from 'final-form'

const SET_USER_DATA= 'SET_USER_DATA';
const SET_MESSAGE_ERROR= 'SET_MESSAGE_ERROR';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    messageerror: null

};

 const  authReducer = (state =initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:

            return { ...state,
                ...action.payload,

                }
                case SET_MESSAGE_ERROR:

            return { ...state.messageerror,
                messageerror: action.messageerror,

                }


        default:
            return state;
    }
}



export const setAuthUserData= (userId, email, login, isAuth, messageerror= null) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth, messageerror}})
export const setMessageError= (messageerror) => ({type: SET_MESSAGE_ERROR, messageerror})
export const getAuthUserData = () => async (dispath) => {
  let response = await authAPI.me()

        if (response.data.resultCode === 0) {

            let {id,email, login} = response.data.data;
           dispath(setAuthUserData(id,email, login, true));
        };




}
export const login = (email, password, rememberMe) => async (dispath) => {
  let response = await  authAPI.login(email, password, rememberMe)

        if (response.data.resultCode === 0) {
            dispath(getAuthUserData())
        } else {

            let messageerror = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
           dispath(setMessageError(messageerror))
        }



}
export const logout = () => async (dispath) => {
    let response = await  authAPI.logout()

        if (response.data.resultCode === 0) {
            dispath(setAuthUserData(null,null, null, false));
        }



}

export default authReducer