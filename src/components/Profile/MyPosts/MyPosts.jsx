import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/formsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h3>New post</h3>
        <div>
            <Field validate={[required, maxLength10]} component={Textarea} name={'newMessageBody'}
                   placeholder={'Enter your message'}/>
        </div>
        <button>Add Post!</button>
    </form>
}

const MyPostReduxForm = reduxForm({form: 'profileAddMessageForm'})(MyPostForm)

const MyPost = (props) => {

    const posts = props.posts.map(el => {
        return <Post key={el.id} content={el.message} numOfLikes={el.likes}/>
    })

    // let newPostElement = React.createRef()
    //
    // const addPost = () => {
    //     props.addPost()
    // }
    //
    // const onPostChange = () => {
    //     props.updateNewPostText(newPostElement.current.value)
    // }

    const addNewMessage = (values) => {
        props.addPost(values.newMessageBody)
    }

    return <div className={s.postsBlock}>
        <h1 className={s.posts__title}>My posts</h1>
        <MyPostReduxForm onSubmit={addNewMessage}/>
        <div className={s.posts}>
            {posts}
        </div>
    </div>
}

export default MyPost