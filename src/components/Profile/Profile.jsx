import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {



    return <div>
        <ProfileInfo
            editModeUpdate={props.editModeUpdate}
            messageerror={props.messageerror}
            saveProfile={props.saveProfile}
            savePhoto={props.savePhoto}
            isOwner={props.isOwner}
            profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>

}

export default Profile;