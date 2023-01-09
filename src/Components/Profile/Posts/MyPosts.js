import React from "react";
import MyPost from "./Post/MyPost";
import classes from "./MyPosts.module.css";


export default function MyPosts(props){
    let myPostsElement = props.posts
    .map(d=> <MyPost name={d.message} counts={d.counts}/>);

    function addPost(){
        let text = newPostElement.current.value;
        alert(text);
    }
    let newPostElement = React.createRef();
    return <div className={classes.postsBox}>
         <div>
            <h3>My Posts</h3> 
        </div>
        <div>
            <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
        {myPostsElement}        
    </div>
}