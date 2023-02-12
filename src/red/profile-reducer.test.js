import profileReducer, {addPostActionCreator,deletePost} from "./profile-reducer";

let state = {
posts: [
        {id:1, message: 'Hi, how are you?', counts:14},
        {id: 2, message: 'I am very good!', counts:1}
    ]
};
test('new post should be added', () => {
  let action = addPostActionCreator("hello world");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
test('after deleting length of messages should be decrement if id is incorrect', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});


