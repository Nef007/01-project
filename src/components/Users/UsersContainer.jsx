import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    unfollow, toggleFollowingProgress, getUsersSite
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getcurrentPage,
    getfollowingInProgress,
    getisFetching,
    getpageSize,
    gettotalUserCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {


    componentDidMount() {

        this.props.getUsersSite(this.props.currentPage, this.props.pageSize);

    }

    onPageChanges = (pageNumber) => {

        this.props.getUsersSite(pageNumber, this.props.pageSize);

        // this.props.setCurrentPage(pageNumber)

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

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         ifFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
//
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getpageSize(state),
        totalUserCount: gettotalUserCount(state),
        currentPage: getcurrentPage(state),
        ifFetching: getisFetching(state),
        followingInProgress: getfollowingInProgress(state)
    }

}



export default compose (
    connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage,
    setTotalUserCount, toggleFollowingProgress, getUsersSite
}))(UsersContainer)