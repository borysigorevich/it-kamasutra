import s from './Nav.module.css'
import {NavLink} from 'react-router-dom'
import {Friend} from './Friend/Friend'
import {Route} from 'react-router-dom'

const Nav = (props) => {
    return <nav className={s.navbar}>
        <div className={s.item}><NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink></div>
        <div className={s.item}><NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink></div>
        <div className={s.item}><NavLink to={'/news'} activeClassName={s.active}>News</NavLink></div>
        <div className={s.item}><NavLink to={'/music'} activeClassName={s.active}>Music</NavLink></div>
        <div className={s.item}><NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink></div>
        <div className={s.item}><NavLink to={'/users'} activeClassName={s.active}>Users</NavLink></div>
        <div className={`${s.item} ${s.friend_block}`}>
            <NavLink to={'/friends'} activeClassName={s.active}>Friends</NavLink>
            <Route path={'/friends'} render={() => {
                return <div className={s.item_friends}>
                    {props.friends.map(el => {
                        return <Friend name={el.name} imgUrl={el.imgUrl}/>
                    })}
                </div>
            }}>
            </Route>
        </div>
    </nav>
}

export default Nav