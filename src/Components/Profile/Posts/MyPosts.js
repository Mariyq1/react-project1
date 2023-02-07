import React from "react";
import MyPost from "./Post/MyPost";
import classes from "./MyPosts.module.css";
import { Formik, Field, Form } from "formik";
    
    const MyPosts = (props)=>{
    let myPostsElement = props.posts.map((p,index)=> <MyPost name={p.message} key={index} counts={p.counts}/>);

    return <div className={classes.postsBox}>
                <div>
                    {myPostsElement}
                </div>
                <AddPostForm onAddPost={props.onAddPost}/>
    </div>
}

    const AddPostForm = (props) =>{
        return(
            <Formik initialValues={{message: ""}}
                onSubmit={(values) => {
                    props.onAddPost(values.newPostText);
                }
                }>
            {() => (
                <Form>
                    <div>
                        <Field component={'textarea'}
                               name={'newPostText'}
                               placeholder={'Enter your post'}/>
                    </div>

                    <div>
                        <button type={'submit'}>Send</button>
                    </div>
                </Form>
            )}
        </Formik>
        )
    }

export default MyPosts;