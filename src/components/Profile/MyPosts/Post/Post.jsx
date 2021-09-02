import s from './Post.module.css'

const Post = (props) => {
    return <div>
        <div className={s.item}>
            <img className={s.post_img}
                 src="https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc"
                 alt="img"/>{props.content}
            <div>
                <span>Likes: {props.numOfLikes}</span>
            </div>
        </div>
    </div>
}

export default Post