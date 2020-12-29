import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'hi? how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 30},
    ],
    newPostText: "Dkfl",
    profile: null,
    status: ""

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],

            };

        }

        case SET_STATUS: {
            return {
                ...state,
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


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispath) => {

    let response = await userAPI.getProfile(userId)

    dispath(setUsersProfile(response.data));


}

export const getStatus = (userId) => async (dispath) => {

    let response = await profileAPI.getStatus(userId)

    dispath(setStatus(response.data));


}
export const updateStatus = (status) => async (dispath) => {

    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {

        dispath(setStatus(status));
    }


}


export default profileReducer