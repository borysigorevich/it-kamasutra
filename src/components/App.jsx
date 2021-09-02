import React from 'react'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'
import s from '../style.module.css'
import {Route, withRouter} from 'react-router-dom'
import DialogsContainer from "./Dialogs/DialogsContainer";
import {NavbarContainer} from "./Nav/NavbarContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {setUserDataThunk} from "../redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "../redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return <div className={s.app_wrapper}>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className={s.app_wrapper_content}>
                <Route path={'/profile/:userId?'} render={() => {
                    return <ProfileContainer/>
                }}/>
                <Route path={'/dialogs'} render={() => {
                    return <DialogsContainer/>
                }}/>
                <Route path={'/news'} render={() => {
                    return <News/>
                }}/>
                <Route path={'/music'} render={() => {
                    return <Music/>
                }}/>
                <Route path={'/settings'} render={() => {
                    return <Settings/>
                }}/>
                <Route path={'/users'} render={() => {
                    return <UsersContainer/>
                }}/>
                <Route path={'/login'} render={() => {
                    return <Login/>
                }}/>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp
    }))(App)