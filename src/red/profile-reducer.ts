import {usersAPI, profileAPI} from "../api";
import { ProfileType,PostType,PhotoType } from "../types/types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


let initialState = {
posts: [
        {id:1,message: 'Hi, how are you?', counts:14},
        {id:2,message: 'I am very good!', counts:1}
    ] as Array<PostType>,
    
    profile: null as ProfileType | null,
    status: "",
    newPostText: ""
};
export type InitialStateType = typeof initialState;
const profileReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = action.newPostText;
            return {...state,
                newPostText: "",
                posts: [...state.posts, newPost]

            }
         
        
        case SET_USER_PROFILE:{
            return{...state, profile: action.profile}
        }
        case SET_STATUS: 
         
         return {...state,
            status: action.status
         }
         case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
         case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state;
    
    }
}



export const addPostActionCreator = (newPostText:string):AddPostActionCreatorType => ({type: ADD_POST,newPostText})
type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
export const deletePost = (postId:number):DeletePostType => ({type: DELETE_POST,postId})
type DeletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const setStatus = (status:string):SetStatusType => ({type: SET_STATUS, status})
type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setUserProfile = (profile: ProfileType):SetUserProfileType =>({type:SET_USER_PROFILE, profile})
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const savePhotoSuccess = (photos:PhotoType):SavePhotoSuccessType=> ({type: SAVE_PHOTO_SUCCESS, photos })
type SavePhotoSuccessType= {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotoType
}

export const getUserProfile = (userId:number) => async (dispatch:any) =>{
    let response = await usersAPI.getProfile(userId)
                dispatch(setUserProfile(response.data));
}
export const getStatus = (userId:number) => async (dispatch:any) =>{
    let response = await profileAPI.getStatus(userId)
                dispatch(setStatus(response.data));
}


export const updateStatus = (status:string) => async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
 
}
export const savePhoto = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    }
 
}
export default profileReducer;