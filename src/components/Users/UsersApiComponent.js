import React from 'react'
import {User} from "./User/User";
import axios from "axios";
import './Users.css'
import Users from "./Users";
import preloader from '../../images/Spinner-1s-200px.svg'

export class UsersApiComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                console.log(response)
            })
    }

    onPageChanged = (page) => {
        debugger
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            <p>Hello</p>
            <img className={'users__api-svg'} src={preloader} alt="img"/>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followToggle={this.props.followToggle}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}