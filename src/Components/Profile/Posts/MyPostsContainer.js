import React from "react";
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../red/profile-reducer"
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

    let mapStateToProps = (state) => {
      return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts

      }
   }
   let mapDispatchToProps = (dispatch) => {
     return {
        onAddPost: ()=>{
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) =>{
        dispatch(updateNewPostTextActionCreator(text));
        }

     }
   }

   const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps ) (MyPosts);
export default MyPostsContainer;
