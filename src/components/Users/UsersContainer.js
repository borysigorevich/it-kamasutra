import {connect} from "react-redux";
import {
    follow,
    followThunkCreator,
    getUsersThunkCreator,
    onPageChangedThunkCreator,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowThunkCreator
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersSuper
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //     console.log(response)
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(response.items)
        //     this.props.setTotalCount(response.totalCount)
        // })
    }

    onPageChanged = (page) => {

        // this.props.getUsersThunkCreator(page, this.props.pageSize)
        this.props.onPageChangedThunkCreator(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    followToggle={this.props.follow}
                    onPageChanged={this.onPageChanged}
                    isFollowingProgress={this.props.isFollowingProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followThunkCreator={this.props.followThunkCreator}
                    unfollowThunkCreator={this.props.unfollowThunkCreator}
                />}
        </>
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.users.users,
//         pageSize: state.users.pageSize,
//         totalUsersCount: state.users.totalUsersCount,
//         currentPage: state.users.currentPage,
//         isFetching: state.users.isFetching,
//         isFollowingProgress: state.users.followingInProgress
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getFollowingInProgress(state)
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         followToggle: (id) => {
//             dispatch(follow(id))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCount(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps,
    {
        follow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator,
        onPageChangedThunkCreator
    })(UsersContainer)