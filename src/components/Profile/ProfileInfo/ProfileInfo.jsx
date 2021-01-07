import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import noavatar from "../../../assets/images/noavatar.jpeg";
import {useEffect, useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileStatusWithHook from "./ProfileStatusWithHook";


const ProfileInfo = (props) => {

    let [editMode,setEditMode] =  useState(false);
    useEffect(() => {
        debugger;
        if(props.editModeUpdate === "Success" )setEditMode(false)

    }, [props.editModeUpdate])



    if (!props.profile) {
            return <Preloader/>
        }


         const onSubmit = async (values) => {
      await  props.saveProfile(values)



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

            {editMode ? <ProfileDataForm  messageerror={props.messageerror} onSubmit={onSubmit} profile={props.profile} /> :  <ProfileData  goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/> }



        </div>

    </div>)

}
const ProfileData = (props) => {
    return   <div>
        {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
        <div><b>Full name</b>: {props.profile.fullName}</div>
        <div><b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}</div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My professional skils</b>: {props.profile.lookingForAJobDescription }
        </div>}

        <div><b>About me</b>:{props.profile.aboutMe}</div>


        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} ContactValue={props.profile.contacts[key]} />
        })}
        </div>

    </div>
}


const Contact = ({contactTitle, ContactValue}) => {

    return <div className={s.contact}><b>{contactTitle}</b>: {ContactValue}</div>
}

export default ProfileInfo;

