import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, setUserProfileThunk, updateStatusThunk} from "../../redux/profile-reducer";
import {Redirect, withRouter} from 'react-router-dom'
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.setUserProfileThunk(userId)
        this.props.getStatusThunk(userId)

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //     .then(response => {
        //         console.log(this.props)
        //         console.log(response)
        //         this.props.setUserProfile(response.data)
        //     })
    }

    render = () => {

        if (!this.props.isAuth) {
            return <Redirect to={'login'}/>
        }

        return <div>
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusThunk}/>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {
        setUserProfileThunk,
        getStatusThunk,
        updateStatusThunk
    }),
    withRouter)(ProfileContainer)

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {
//     setUserProfile,
//     setUserProfileThunk
// })(WithUrlDataContainerComponent)

