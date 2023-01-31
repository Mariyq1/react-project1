import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../red/messages-reducer"
import { connect } from "react-redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        
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
let AuthRedirectComponent = AuthRedirect(Dialogs);

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps ) (AuthRedirectComponent);
export default DialogsContainer;