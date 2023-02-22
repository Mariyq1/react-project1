import Dialogs from "./Dialogs";
import {addMessageActionCreator} from "../../red/messages-reducer"
import { connect } from "react-redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
         dispatch (addMessageActionCreator(newMessageText));
        }
    }
}

export default compose(
    connect (mapStateToProps, mapDispatchToProps ),
    AuthRedirect)(Dialogs);