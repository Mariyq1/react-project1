import { authAPI } from "../api";
const SET_USER_DATA = 'react-project1/auth/SET_USER_DATA';


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false 
};
export type InitialStateType = typeof initialState;
const authReducer = (state = initialState, action: any):InitialStateType => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                
            }
        
        default:
            return state;
    }
}
type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
     login: string | null
     isAuth: boolean

}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType

}
export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth:boolean):SetAuthUserDataActionType => 
({type: SET_USER_DATA, payload:{userId, email, login, isAuth} })

export const getAuthUserData = () => async (dispatch:any)=>{
    let response = await authAPI.me();
                if(response.data.resultCode === 0){
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, login, email, true));
                };
}


export const login = (email:string, password:string, rememberMe:boolean) => async (dispatch:any)=>{
    let response = await authAPI.login(email, password, rememberMe);
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } 
  }
;
export const logout = () => async (dispatch:any)=>{
    let response = await authAPI.logout()
                if(response.data.resultCode === 0){
                    dispatch(setAuthUserData( null,null, null, false));
                }
}

export default authReducer;