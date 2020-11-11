import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {



    return <div>
        <ProfileInfo/>
        <MyPosts store={props.store}
                 dispatch={props.dispatch}

                 />
    </div>

}

export default Profile;