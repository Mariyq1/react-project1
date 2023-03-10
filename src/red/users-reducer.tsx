import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api";
import {  UserType } from "../types/types";
import { updateObjectInArray } from "./object-helpers";
import { AppStateType } from "./redux-store";
import { Dispatch } from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [ ] as Array <UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage:1,
    isFetching: false,
    followingInProgress: [] as Array <number>
};
type InitialState = typeof initialState;

const usersReducer = (state = initialState, action:ActionsTypes):InitialState => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,"id", {followed:true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,"id", {followed:false})
            }
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ]}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return{...state, 
                followingInProgress: action.isFetching ? 
                [...state.followingInProgress, action.userId]
                :state.followingInProgress.filter(id => id!== action.userId)
            }
        }
        default:
            return state;
    }
}
type ActionsTypes = FollowSuccessType | UnfollowSuccessType | SetUsersType |
SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType |
ToggleFollowingProgressType


export const followSuccess = (userId:number):FollowSuccessType => ({type: FOLLOW, userId })
type FollowSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const unfollowSuccess = (userId:number):UnfollowSuccessType => ({type: UNFOLLOW, userId })
type UnfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}
export const setUsers = (users: Array<UserType>):SetUsersType => ({type: SET_USERS, users })
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setCurrentPage = (currentPage:number):SetCurrentPageType =>({type: SET_CURRENT_PAGE, currentPage})
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setTotalUsersCount= (totalUsersCount:number):SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingType =>({type: TOGGLE_IS_FETCHING, isFetching})
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleFollowingProgress = (isFetching:boolean, userId:number):ToggleFollowingProgressType =>
({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const requestUsers = (page:number, pageSize:number):ThunkType =>{
    return async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data= await usersAPI.getUsers(page, pageSize)
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(toggleIsFetching(false));
        }
}

const followUnfollowFlow = async (dispatch:DispatchType,userId:number,apiMethod:any,
    actionCreator:(userId: number) => FollowSuccessType | UnfollowSuccessType
    ) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
        if(response.data.resultCode === 0){
            dispatch(actionCreator(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
    }



export const follow = (userId:number):ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),
        followSuccess);
  
    }
}
export const unfollow = (userId:number):ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),
        unfollowSuccess);
    }
}


export default usersReducer;