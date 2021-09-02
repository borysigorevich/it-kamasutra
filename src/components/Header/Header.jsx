import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({id, login, email, isAuth, Logout}) => {
    return <header className={s.header}>
        <img className={s.header__img}
             src="https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g"
             alt="img"/>
        <div className={s.header__login}>
            {isAuth
                ? <div>{login} <button onClick={Logout} className={s.logout__btn}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header