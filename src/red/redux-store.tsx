import { applyMiddleware, combineReducers, legacy_createStore, compose, Action,  } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import { ThunkAction } from "redux-thunk";


let rootReducer = combineReducers({
profilePage: profileReducer,
messagesPage: messagesReducer,
sidebar: sidebarReducer,
usersPage: usersReducer,
auth: authReducer,
app: appReducer
}

);
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type BaseThunkType<ActionTypes extends Action,
   ReturnType = Promise<void>> = ThunkAction<ReturnType,
   AppStateType, unknown, ActionTypes>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// @ts-ignore
let store = legacy_createStore(rootReducer,applyMiddleware(thunkMiddleware));
// @ts-ignore
window.__store__ = store;

export default store;