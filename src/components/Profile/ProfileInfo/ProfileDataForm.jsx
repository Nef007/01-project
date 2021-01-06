import {Field, Form} from "react-final-form";
import {Input, Textarea} from "../../common/FormsControl/FormControls";
import s from './ProfileInfo.module.css';
import React from "react";
import style from "../../common/FormsControl/FormControls.module.css";


const ProfileDataForm = (props) => {


   return <Form
       initialValues={props.profile}
       onSubmit={props.onSubmit}
        render={({ handleSubmit, submitError}) => (
            <form onSubmit={handleSubmit} >
                     <div>
                        <button>save</button>
                    </div>
                {
                    props.messageerror &&
                    <div className={style.formSummaryError}>
                        {props.messageerror}
                    </div>}
                    <div><b>Full name</b>:  <Field placeholder={"Full name"} name={'fullName'} component={Input}/></div>
                    <div><b>Looking for a job</b>:<Field  name={'lookingForAJob'} component={Input} type={"checkbox"} />
                    </div>
                    <div>
                        <b>My professional skils</b>: <Field placeholder={'My professional skils'} name={'lookingForAJobDescription'}
                                                             component={Textarea}  />
                    </div>

                    <div><b>About me</b>:<Field placeholder={'About me'} name={'aboutMe'}
                                                component={Textarea}  /></div>


                    <div>
                        <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                        return <div key={key} className={s.contact}>
                            <b>{key}:</b> <Field placeholder={key} name={'contacts.' + key} component={Input}/>

                        </div>
                    })}

                    </div>
                </form>
        )}
    />


}

export default ProfileDataForm