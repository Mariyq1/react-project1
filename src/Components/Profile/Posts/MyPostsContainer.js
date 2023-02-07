import {addPostActionCreator} from "../../../red/profile-reducer"
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

    let mapStateToProps = (state) => {
      return {
        posts: state.profilePage.posts

      }
   }
   let mapDispatchToProps = (dispatch) => {
     return {
        onAddPost: (newPostText)=>{
            dispatch(addPostActionCreator(newPostText));
        }

     }
   }

   const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps ) (MyPosts);
export default MyPostsContainer;
