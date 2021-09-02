import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            console.log('withAuthRedirect',this.props.isAuth)
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}