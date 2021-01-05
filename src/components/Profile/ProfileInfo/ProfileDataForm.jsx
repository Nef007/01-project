import {Field, Form} from "react-final-form";
import {Input, Textarea} from "../../common/FormsControl/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import style from "../../common/FormsControl/FormControls.module.css";
import React from "react";


const ProfileDataForm = (props) => {


   return <Form
       initialValues={props.profile}
       onSubmit={props.onSubmit}
        render={({ handleSubmit, submitError}) => (
            <form onSubmit={handleSubmit} >
                     <div>
                        <button>save</button>
                    </div>
                    <div><b>Full name</b>:  <Field placeholder={"Full name"} name={'fullName'} component={Input}/></div>
                    <div><b>Looking for a job</b>:<Field  name={'lookingForAJob'} component={Input} type={"checkbox"} />
                    </div>
                    <div>
                        <b>My professional skils</b>: <Field placeholder={'My professional skils'} name={'lookingForAJobDescription'}
                                                             component={Textarea}  />
                    </div>

                    <div><b>About me</b>:<Field placeholder={'About me'} name={'aboutMe'}
                                                component={Textarea}  /></div>


                    {/*<div>*/}
                    {/*    <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {*/}
                    {/*    return <Contact contactTitle={key} ContactValue={props.profile.contacts[key]}/>*/}
                    {/*})}*/}
                    {/*</div>*/}
                </form>
        )}
    />


}

export default ProfileDataForm