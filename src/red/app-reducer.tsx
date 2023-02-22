
import { getAuthUserData } from "./auth-reducer";
const INISIALIZED_SUCCESS = 'INISIALIZED_SUCCESS';

export type InitialStateType = {
    inisialized: boolean
}
let initialState:InitialStateType = {
    inisialized: false
};

const appReducer = (state = initialState, action:any):InitialStateType => {
    switch(action.type) {
        case INISIALIZED_SUCCESS:
            return {
                ...state,
                inisialized: true
                
            }
        
        default:
            return state;
    }
}

type InisializedSuccessActionType = {
    type: typeof INISIALIZED_SUCCESS;
}
export const inisializedSuccess = ():InisializedSuccessActionType => 
({type: INISIALIZED_SUCCESS })
export const initializeApp = () => (dispatch:any)=>{
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(()=>{
        dispatch(inisializedSuccess());
    })
    
}

export default appReducer;