import React from "react";
import "./Profile.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../red/profile-reducer";
import axios from "axios";

class ProfileContainer extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
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
export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);