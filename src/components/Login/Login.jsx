import React from 'react';
import { Form, Field } from 'react-final-form'
import {Input} from "../common/FormsControl/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const LoginForm = (props) => {

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    const onSubmit = (values) => {
        window.alert(JSON.stringify(values, 0, 2))
    }


    return <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
    <form onSubmit={handleSubmit} >
                <div>
                     <Field placeholder={"Login"} name={'login'} component={Input}
                            validate={composeValidators(required, maxLengthCreator(50))}/>
                </div>
                <div>
                    <Field placeholder={"Password"}  name={'password'} component={Input}
                           validate={composeValidators(required, maxLengthCreator(50))}/>
                </div>
                <div>
                    <Field type={"checkbox"}  name={'rememberMe'}component={Input}/>  remember me
                </div>
                <div>
                    <button >Login</button>
                </div>


        </form>
        )}
    />



}

const Login = (props) => {

    return <div>
        <h1>LOGIN</h1>
        <LoginForm/>

    </div>
}

export default Login;