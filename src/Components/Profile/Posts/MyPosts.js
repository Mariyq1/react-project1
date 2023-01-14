import React from "react";
import MyPost from "./Post/MyPost";
import classes from "./MyPosts.module.css";

    export default function MyPosts (props){
    let myPostsElement = props.posts.map(p=> <MyPost name={p.message} counts={p.counts}/>);

    let newPostElement = React.createRef();
    let addPost= () =>{
        props.dispatch({type:"ADD-POST"});
    }
    let OnPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
    }
    return <div className={classes.postsBox}>
         <div>
            <h3>My Posts</h3> 
        </div>
        <div>
            <textarea 
            onChange={OnPostChange}
            ref={newPostElement}
            value={props.NewPostText}
            />
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
        {myPostsElement}        
    </div>
}
