import React from 'react';
import {Field, reduxForm} from "redux-form";
import './Login.css'
import {Input} from "../common/formsControls/FormsControls";
import style from '../common/formsControls/FormsControls.module.css'
import {maxLengthCreator, required} from "../../utils/validators";
import {connect} from "react-redux";
import {LoginThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'} name={'email'} component={Input} validate={[required, maxLength30]}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                   validate={[required, maxLength30]}/>
        </div>
        <div>
            <Field component={'input'} type={'checkbox'} name={'rememberMe'}/>Remember me
        </div>
        {props.error && <div className={style.form_summary_error}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.LoginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1 className={'login__title'}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    LoginThunk
})(Login);