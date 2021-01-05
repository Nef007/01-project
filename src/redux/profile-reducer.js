import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case DELETE_POST: {

            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)

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

        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile : {...state.profile, photos: action.photos }}
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

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

export const savePhoto = (file) => async (dispath) => {

    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {

        dispath(savePhotoSuccess(response.data.data.photos));
    }


}
export const saveProfile = (profile) => async (dispath, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {

       dispath(getUserProfile(userId));
    }


}


export default profileReducer