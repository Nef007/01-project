import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE= 'SET_USER_PROFILE';
const SET_STATUS= 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'hi? how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 30},
    ],
    newPostText: "Dkfl",
    profile: null,
    status: ""

};

 const  profileReducer = (state =initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
           return {...state,
                posts: [ ...state.posts, newPost],
                newPostText: ''
            };

        }
        case UPDATE_NEW_POST_TEXT: {
           return  {...state,
               newPostText: action.newText
           }

        }
        case SET_STATUS: {
           return  {...state,
               status: action.status
           }

        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}



export const addPostActionCreator = () => ({type: ADD_POST})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus= (status) => ({type: SET_STATUS, status})

export  const getUserProfile = (userId) => (dispath) => {

    userAPI.getProfile(userId).then(response => {

       dispath(setUsersProfile(response.data));


    });


}

export  const getStatus = (userId) => (dispath) => {

    profileAPI.getStatus(userId).then(response => {

       dispath(setStatus(response.data));


    });


}
export  const updateStatus = (status) => (dispath) => {

    profileAPI.updateStatus(status).then(response => {

        if (response.data.resultCode === 0 ) {

            dispath(setStatus(status));
        }

    });


}
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer