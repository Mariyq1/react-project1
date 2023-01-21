import React from "react";
import MyPost from "./Post/MyPost";
import classes from "./MyPosts.module.css";
    
    export default function MyPosts (props){
    let myPostsElement = props.posts.map(p=> <MyPost name={p.message} key={p.id} counts={p.counts}/>);

    let newPostElement = React.createRef();
    let onAddPost= () =>{
        props.onAddPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }
    return <div className={classes.postsBox}>
         <div>
            <h3>My Posts</h3> 
        </div>
        <div>
            <textarea 
            onChange={onPostChange}
            ref={newPostElement}
            value={props.NewPostText}
            />
            </div>
            <div>
                <button onClick={onAddPost}>Add Post</button>
            </div>
        {myPostsElement}        
    </div>
}
