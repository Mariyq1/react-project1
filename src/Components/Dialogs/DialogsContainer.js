import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../red/messages-reducer"
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
         dispatch (addMessageActionCreator());
        },
        updateNewMessageText: (message) => {
            dispatch (updateNewMessageActionCreator(message));
        }
    }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps ) (Dialogs);
export default DialogsContainer;