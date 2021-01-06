import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Field, Form} from "react-final-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormControls";



const MyPosts = (props) => {


    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} like_count={p.likesCount}/>)
    let newPostElement = React.createRef()


    const onAddPost = (values) => {
        debugger
        props.addPost(values.newPostText);
    }

        return <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>


    }


const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


const AddNewPostForm = (props) => {

        return <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} >

                        <div>
                            <Field component={Textarea} name="newPostText"
                                   validate={composeValidators(required, maxLengthCreator(10))}
                            />
                        </div>
                        <div>
                            <button>Add post</button>
                        </div>
                </form>
            )}
        />

    }




export default MyPosts;