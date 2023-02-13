import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
profilePage: profileReducer,
messagesPage: messagesReducer,
sidebar: sidebarReducer,
usersPage: usersReducer,
auth: authReducer,
app: appReducer
}

);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;