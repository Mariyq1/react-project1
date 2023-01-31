import React from "react";
import "./Profile.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../red/profile-reducer";
import { useParams,useLocation,useNavigate, Navigate } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId=  this.props.router.params.userId;
        if(!userId){
            userId=5;
        }
        this.props.getUserProfile(userId);
        

    }
    render() {
        if(!this.props.isAuth) return <Navigate to ={"/login"}/>
        return <div className="Profile">
        <Profile {...this.props} profile={this.props.profile}/>
    </div>

    }
    
    
}
let mapStateToProps = (state) => ({
 profile: state.profilePage.profile,
 isAuth: state.auth.isAuth
});
function withRouter() {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {getUserProfile}) ( withRouter(ProfileContainer));