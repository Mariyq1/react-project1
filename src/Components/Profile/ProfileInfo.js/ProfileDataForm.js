import React from "react";
import {Formik, Form, Field} from 'formik';


const ProfileDataForm = ({profile}) =>{
    return <Formik
        initialValues={{ fullName: '', password: '' }}
        >
        <Form>
            <button onClick={() => { } }>
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
                    <Field type='textarea' name='mySkills' placeholder='My skills' />
                </div>
            <div>
                <b>About me:</b> <br></br>
                <Field type='textarea' name='aboutMe' placeholder='About me' />
            </div>
            <div>
                {/* <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key}
                        contactValue={profile.contacts[key]}
                        key={key} />;
                })} */}
            </div>
        </Form>
    </Formik>;
}
export default ProfileDataForm;