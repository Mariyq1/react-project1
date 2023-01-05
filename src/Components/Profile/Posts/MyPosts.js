import React from "react";
import MyPost from "./Post/MyPost";


export default function MyPosts(){
    return <div className="MyPosts">
        My Posts 
        <div>
            New Post
        </div>
        <MyPost  message= "Hi, how are you?" counts='14'/>
        <MyPost message= "I am very good!" counts='1'/>
        <MyPost message= "What are you doing?" counts='15'/>


         
        
    </div>
}