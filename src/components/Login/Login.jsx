import React from 'react';
import { Form, Field } from 'react-final-form'
import {Input} from "../common/FormsControl/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControl/FormControls.module.css";



const LoginForm = (props) => {

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)




    return <Form
        onSubmit={props.onSubmit}
      captchaUrl={props.captchaUrl}
        render={({ handleSubmit, submitError}) => (
    <form onSubmit={handleSubmit} >
                <div>
                     <Field placeholder={"Email"} name={'email'} component={Input}
                            validate={composeValidators(required, maxLengthCreator(50))}/>
                </div>
                <div>
                    <Field placeholder={"Password"} type="password" name={'password'} component={Input}
                           validate={composeValidators(required, maxLengthCreator(50))}/>
                </div>
                <div>
                    <Field type={"checkbox"}  name={'rememberMe'}component={Input}/>  remember me
                </div>
        {props.captchaUrl && <img src={props.captchaUrl} /> }
        {props.captchaUrl && <Field placeholder={"symbols from image"} name={'captcha'} component={Input}
                                    validate={composeValidators(required)}/> }

        {props.messageerror &&
        <div className={style.formSummaryError}>
            {props.messageerror}
        </div>}
                <div>
                    <button >Login</button>
                </div>


        </form>
        )}
    />



}

const Login = (props) => {
    const onSubmit = (values) => {
            props.login(values.email, values.password, values.rememberMe, values.captcha)

    }


    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={onSubmit} messageerror={props.messageerror} captchaUrl={props.captchaUrl}/>

    </div>
}

const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    messageerror: state.auth.messageerror,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);