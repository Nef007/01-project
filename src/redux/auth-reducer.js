import {authAPI, securityAPI} from "../api/api";


const SET_USER_DATA= 'SET_USER_DATA';
const SET_MESSAGE_ERROR= 'SET_MESSAGE_ERROR';
const GET_CAPTCHA_URL_SUCCESS =  'GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    messageerror: null,
    captchaUrl: null

};

 const  authReducer = (state =initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:

            return { ...state,
                ...action.payload,

                }
                case SET_MESSAGE_ERROR:

            return { ...state,
                messageerror: action.messageerror,

                }



        default:
            return state;
    }
}



export const setAuthUserData= (userId, email, login, isAuth, messageerror) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth, messageerror}})
export const getCaptchaUrlSuccess= (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})
export const setMessageErrorAutn= (messageerror) => ({type: SET_MESSAGE_ERROR, messageerror})
export const getAuthUserData = () => async (dispath) => {
  let response = await authAPI.me()

        if (response.data.resultCode === 0) {

            let {id,email, login} = response.data.data;
           dispath(setAuthUserData(id,email, login, true));
        };




}
export const login = (email, password, rememberMe, captcha) => async (dispath) => {
  let response = await  authAPI.login(email, password, rememberMe, captcha)

        if (response.data.resultCode === 0) {
            dispath(getAuthUserData())
            dispath(getCaptchaUrlSuccess(null));
        } else {

           if (response.data.resultCode === 10){
                dispath(getCaptchaUrl())

           }
            let messageerror = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
           dispath(setMessageErrorAutn(messageerror))
        }

}
export const getCaptchaUrl = () => async (dispath) => {
  const response = await  securityAPI.getCaptchaUri()

         const captchaUrl =response.data.url;

            dispath(getCaptchaUrlSuccess(captchaUrl));


}
export const logout = () => async (dispath) => {
    let response = await  authAPI.logout()

        if (response.data.resultCode === 0) {
            dispath(setAuthUserData(null,null, null, false));
        }



}

export default authReducer