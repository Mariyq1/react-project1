import React from "react";
import { Navigate } from "react-router";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
 isAuth: state.auth.isAuth});
export const AuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth) return <Navigate to ={"/login"}/>
            return <Component {...this.props}/>
        }
    }
    
let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}