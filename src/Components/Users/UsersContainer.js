import Users from "./Users";
import { connect } from "react-redux";
import { unfollowAC, followAC, setUsersAC} from "../../red/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users

    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) =>{
            dispatch(followAC(userId));
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
}
export default connect (mapStateToProps, mapDispatchToProps) (Users);