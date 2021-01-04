import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import noavatar from "../../../assets/images/noavatar.jpeg";

const ProfileInfo = (props) => {

        if (!props.profile) {
            return <Preloader/>
        }


        const onMainPhotoSelected = (e) => {
            if(e.target.files.length) {
                props.savePhoto(e.target.files[0])


            }

        }

    return (<div>
        {/*<div>*/}
        {/*    <img src="https://i.pinimg.com/736x/83/6b/15/836b15f0394d102ae43afe4d466a979f.jpg"/>*/}
        {/*</div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large || noavatar} className={s.mainPhoto}/>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }


            <ProfileStatusWithHook status ={props.status} updateStatus={props.updateStatus}/>


            <div>{props.profile.aboutMe}</div>
            <div><h3>Контакты:</h3></div>
            <div>facebook: {props.profile.contacts.facebook} </div>
            <div>github: {props.profile.contacts.github} </div>
            <div>instagram: {props.profile.contacts.instagram} </div>
            <div>mainLink: {props.profile.contacts.mainLink} </div>
            <div>twitter: {props.profile.contacts.twitter} </div>
            <div>vk: {props.profile.contacts.vk} </div>
            <div>website: {props.profile.contacts.website} </div>
            <div>youtube: {props.profile.contacts.youtube} </div>
        </div>

    </div>)

}

export default ProfileInfo;

