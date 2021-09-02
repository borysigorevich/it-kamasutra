import Dialogs from "./Dialogs";
import {addMessageActionCreator /*updateNewMessageTextActionCreator*/} from '../../redux/dialogs-reducer'
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// export const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             return <Dialogs
//                 messages={store.getState().dialogPage.messages}
//                 dialogs={store.getState().dialogPage.dialogs}
//                 addMessage={() => {
//                     store.dispatch(addMessageActionCreator())
//                 }
//                 }
//                 updateMessage={(message) => {
//                     store.dispatch(updateNewMessageTextActionCreator(message))
//                 }
//                 }
//                 newMessageText={store.getState().dialogPage.newMessageText}
//             />
//         }}
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
        // dialogs: state.dialogPage.dialogs,
        // messages: state.dialogPage.messages,
        // newMessageText: state.dialogPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message))
        }
        // ,
        // updateMessage: (message) => {
        //     dispatch(updateNewMessageTextActionCreator(message))
        // }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
    , withAuthRedirect)(Dialogs)

// const AuthRedirectComponent = withAuthRedirect(Dialogs)
//
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)