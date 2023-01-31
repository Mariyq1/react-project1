import React from "react";
import "./Profile.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../red/profile-reducer";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { useLocation, useNavigate, useParams } from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId=  this.props.router.params.userId;
        if(!userId){
            userId=5;
        }
        this.props.getUserProfile(userId);
        

    }
    render() {
        
        return <div className="Profile">
        <Profile {...this.props} profile={this.props.profile}/>
    </div>

    }
    
    
}
let AuthRedirectComponent = AuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
 profile: state.profilePage.profile,
 
});

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
let ComponentWithRouterProp = AuthRedirectComponent;

export default connect(mapStateToProps, {getUserProfile}) ( withRouter(ComponentWithRouterProp));