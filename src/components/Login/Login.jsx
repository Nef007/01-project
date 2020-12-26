import React from 'react';
import { Form, Field } from 'react-final-form'
import {Input} from "../common/FormsControl/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControl/FormControls.module.css";
import {FORM_ERROR} from "final-form";


const LoginForm = (props) => {

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)




    return <Form
        onSubmit={props.onSubmit}
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
            props.login(values.email, values.password, values.rememberMe)

    }

    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={onSubmit} messageerror={props.messageerror}/>

    </div>
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    messageerror: state.auth.messageerror
})

export default connect(mapStateToProps, {login})(Login);