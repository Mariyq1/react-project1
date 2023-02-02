import React from "react";
import "./Profile.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus,updateStatus } from "../../red/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId=  this.props.router.params.userId;
        if(!userId){
            userId=27688;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        

    }
    render() {
        
        return <div className="Profile">
        <Profile {...this.props} profile={this.props.profile} 
        status={this.props.status}
        updateStatus={this.props.updateStatus}/>
    </div>

    }
    
    
}



let mapStateToProps = (state) => ({
 profile: state.profilePage.profile,
 status: state.profilePage.status
 
});


  export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    function withRouter(ProfileContainer) {
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
  )(ProfileContainer)

  