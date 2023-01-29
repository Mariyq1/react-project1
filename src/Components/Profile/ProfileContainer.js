import React from "react";
import "./Profile.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../red/profile-reducer";
import axios from "axios";
import { useParams,useLocation,useNavigate } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId=  this.props.router.params.userId;
        if(!userId){
            userId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(
            response=>{
                this.props.setUserProfile(response.data);
            })

    }
    render() {
        return <div className="Profile">
        <Profile {...this.props} profile={this.props.profile}/>
    </div>

    }
    
    
}
let mapStateToProps = (state) => ({
 profile: state.profilePage.profile
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

export default connect(mapStateToProps, {setUserProfile}) ( withRouter(ProfileContainer));