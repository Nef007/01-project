import {authAPI} from "../api/api";
import { FORM_ERROR } from 'final-form'
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS= 'SET_INITIALIZED';



let initialState = {
    initialized: null,


};

 const  appReducer = (state =initialState, action) => {
    switch (action.type){
        case INITIALIZED_SUCCESS:

            return { ...state,
                initialized: true

                }


        default:
            return state;
    }
}



export const initializedSucces= () => ({type: INITIALIZED_SUCCESS})
export const initializeApp = () => (dispath) => {

      let promise =  dispath(getAuthUserData());

            promise.then(() => {

                dispath(initializedSucces());
            });



}

export default appReducer