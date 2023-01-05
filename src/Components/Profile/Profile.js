import React from "react";
import MyPosts from "./Posts/MyPosts";
import "./Profile.css";

export default function Profile(){
    return <div className="Profile">
        <img src="https://zaycafe.ru/wp-content/uploads/2019/05/top-mobile.jpg" alt="rabbit"/>
    
    <MyPosts/>
    </div>
}