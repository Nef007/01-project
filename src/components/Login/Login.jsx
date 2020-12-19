import React from 'react';
import { Form, Field } from 'react-final-form'

const LoginForm = (props) => {


    const onSubmit = (values) => {
        window.alert(JSON.stringify(values, 0, 2))
    }


    return <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
    <form onSubmit={handleSubmit} >
                <div>
                     <Field placeholder={"Login"} name={'login'} component="input"/>
                </div>
                <div>
                    <Field placeholder={"Password"}  name={'password'} component="input"/>
                </div>
                <div>
                    <Field type={"checkbox"}  name={'rememberMe'}component="input"/>  remember me
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