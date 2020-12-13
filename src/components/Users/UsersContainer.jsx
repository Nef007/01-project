import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    unfollow, toggleFollowingProgress, getUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";


class UsersContainer extends React.Component {


    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanges = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

        this.props.setCurrentPage(pageNumber)

    }

    render() {
        return <>

            {this.props.ifFetching ? <Preloader/> : null}


            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanges={this.onPageChanges}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        ifFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

}

export default connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage,
    setTotalUserCount, toggleFollowingProgress, getUsers
})(UsersContainer);