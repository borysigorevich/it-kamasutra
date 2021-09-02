import MyPost from './MyPosts'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

// export const MyPostContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             console.log(store)
//             return <MyPost
//                 updateNewPostText={text => {
//                     store.dispatch(updateNewPostTextActionCreator(text))
//                 }}
//                 addPost={() => {
//                     store.dispatch(addPostActionCreator())
//                 }}
//                 state={store.getState().profilePage}/>
//         }
//         }</StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText(text) {
        //     dispatch(updateNewPostTextActionCreator(text))
        // },
        addPost(newMessageBody) {
            dispatch(addPostActionCreator(newMessageBody))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)


