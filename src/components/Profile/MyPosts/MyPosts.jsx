import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let state = props.store.getState().profilePage;
debugger;
    let postsElement = state.posts.map(p => <Post message={p.message} like_count={p.likesCount}/>)
    let newPostElement= React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }
    let onPostChange =() => {
        let text = newPostElement.current.value;

        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);}


    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}  value={state.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>


}

export default MyPosts;