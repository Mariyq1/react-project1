import React from "react";
import { connect } from "react-redux";
import { unfollow, follow, requestUsers} from "../../red/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";
import { getPageSize,getTotalUsersCount,getCurrentPage,
getIsFetching,getFollowingInProgress,getUsers } from "../../red/users-selectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../red/redux-store";


type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    unfollow: (userId:number) => void
    follow: (userId:number) => void
    requestUsers: (currentPage: number,  pageSize:number ) => void
    
}
type OwnPropsType = {
    pageTitle: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    
    componentDidMount(){
        const {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber: number)=>{
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);

    }
    render() {
        
        return <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader/> :null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
                      followingInProgress = {this.props.followingInProgress}
                      />

        </>
    }
}
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress

//     }
// }
let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}


export default compose(
     connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
     (mapStateToProps, {follow,unfollow, requestUsers}
),
     AuthRedirect)
     // @ts-ignore
(UsersContainer)



