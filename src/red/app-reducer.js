
import { getAuthUserData } from "./auth-reducer";
const INISIALIZED_SUCCESS = 'INISIALIZED_SUCCESS';


let initialState = {
    inisialized: false
};

const appReducer = (state = initialState, action) => {
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


export const inisializedSuccess = () => 
({type: INISIALIZED_SUCCESS })
export const initializeApp = () => (dispatch)=>{
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(()=>{
        dispatch(inisializedSuccess());
    })
    
}

export default appReducer;