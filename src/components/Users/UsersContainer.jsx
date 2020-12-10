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
        //     this.props.toggleIsFetching(true)
        //
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUserCount(data.totalCount)
        //
        // });
    }

    onPageChanges = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);


        this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        //
        // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // });


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

// let mapDispatchToProps = (dispatch) => {
//
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUserCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//
//         toggleIsFetching:(isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage,
    setTotalUserCount, toggleFollowingProgress, getUsers
})(UsersContainer);