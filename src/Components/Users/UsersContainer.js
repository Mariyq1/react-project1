import React from "react";
import { connect } from "react-redux";
import { unfollow, follow, setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching} from "../../red/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { usersApi } from "../../api";
class UsersContainer extends React.Component {
    
    componentDidMount(){
    this.props.toggleIsFetching(true);
    usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(
            data=>{
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }
    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
            this.props.toggleIsFetching(true);
        
    usersApi.getUsers(pageNumber, this.props.pageSize).then(
            data=>{
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);

            });

    }
    render() {
        
        return <>
        {this.props.isFetching ? <Preloader/> :null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}/>
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

export default connect (mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
}) (UsersContainer);