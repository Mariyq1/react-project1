
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
posts: [
        {message: 'Hi, how are you?', counts:14},
        {message: 'I am very good!', counts:1}
    ],
        newPostText:"Hello my friend"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
         case ADD_POST: {
            let newPost = {
            message: state.newPostText,
            counts:14
        }
        let stateCopy = {...state};
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = "";
        return stateCopy;}
         case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
        return stateCopy;
        }
        default:
            return state;
    
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT,
            newText: text})
export default profileReducer;