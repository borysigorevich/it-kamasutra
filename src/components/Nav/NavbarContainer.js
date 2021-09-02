import {connect} from "react-redux";
import Nav from "./Nav";

const mapStateToStore = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

export const NavbarContainer = connect(mapStateToStore)(Nav)