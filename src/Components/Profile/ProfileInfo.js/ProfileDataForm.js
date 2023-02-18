import React from "react";
import {Formik, Form, Field} from 'formik';
import classes from './ProfileInfo.module.css'


const ProfileDataForm = ({profile, onSubmit}) =>{
    return <Formik
        initialValues={{ fullName: '', lokingForAjob: '', mySkills: '', aboutMe: '' }}
        onSubmit={(values) => {
                    onSubmit(values.fullName, values.lokingForAjob, 
                        values.mySkills, values.aboutMe);
                }}
        >
        <Form>
            <button type='submit'>
                    Submit
                </button>
            <div>
                 <b>Full name:</b>:<br></br>
                <Field type='fullName' name='fullName' placeholder='fullName' />
    
            </div>
            <div>
                <b>Looking for a job:</b>: <br></br>
                <Field type='checkbox' name='lokingForAjob' placeholder='lokingForAjob' />
            </div>
           
                <div>
                    <b>My skills:</b> <br></br>
                    <Field type='mySkills' name='mySkills' placeholder='My skills' />
                </div>
            <div>
                <b>About me:</b> <br></br>
                <Field type='aboutMe' name='aboutMe' placeholder='About me' />
            </div>
            <div>
                <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
                    return <div className={classes.Contact}>
                        <b>{key}:
                        <Field type='contacts. + key' name='contacts' placeholder= 'key' />
                
                        </b>
                        </div>
                })}
            </div>
        </Form>
    </Formik>;
}
export default ProfileDataForm;