import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import { Navigate } from "react-router";
import { Formik, Field, Form } from "formik";


const Dialogs = (props) => {

    let state = props.messagesPage;
    let dialogsElements = state.dialogs.map (d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map (m => <Messages message={m.message} key={m.id} id={m.id}/>);
    let newMessageText = state.newMessageText;
  
    
    if (props.isAuth === false) {
     return  <Navigate to={"/login"} />
    };


    return (
        <div className={classes.Dialogs}>

            <div className={classes.Messages}>
                {dialogsElements}
            </div>

            <AddMessageForm sendMessage={props.sendMessage}/>
            
            <div>
                <div>{messagesElements}</div>
            </div>
        </div>
    )
};
const AddMessageForm = (props) => {
    return (
        <Formik initialValues={{message: ""}}
                onSubmit={(values) => {
                    props.sendMessage(values.newMessageText);
                }
                }>
            {() => (
                <Form>
                    <div>
                        <Field component={'textarea'}
                               name={'newMessageText'}
                               placeholder={'Enter your message'}/>
                    </div>

                    <div>
                        <button type={'submit'}>Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}



export default Dialogs;