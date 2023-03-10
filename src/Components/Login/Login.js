import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import classes from './Login.module.css';
import {connect} from "react-redux";
import {Navigate} from 'react-router-dom';
import {login} from "../../red/auth-reducer";

const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Enter email';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const validationSchemaLoginForm = Yup.object().shape({

    password: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(30, "Must be shorter than 30 characters")
        .required("Enter your password"),
        email: Yup.string().min(2, "Must be longer than 2 characters")
       .max(30, "Enter your real name, not too long")
         .required("Enter your email")
});

const Login = (props) => {

    if (props.isAuth) return <Navigate to='/profile'/>

    return (
        <div className={classes.login}>
            <h1>Log in</h1>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false, messages: null}}
                validate={validateLoginForm}
                validationSchema={validationSchemaLoginForm}

                onSubmit={(values) => {
                    props.login(values.email, values.password, values.rememberMe);
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field type='email' name='email' placeholder='e-mail'/>
                            <ErrorMessage name='email' component='p'/>
                        </div>
                        <div>
                            <Field type='password' name='password' placeholder='password'/>
                            <ErrorMessage name='password' component='p'/>
                        </div>
                        <div>
                            <Field type='checkbox' name='rememberMe'/>
                            <label htmlFor='rememberMe'>remember me</label>
                        </div>
                        <button type='submit'>Log in</button>
                        <p>{props.messageError}</p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};


let mapStateToProps = (state) => {
    return {
        messageError: state.auth.messageError,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(Login);