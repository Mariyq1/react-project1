import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData= [
        {message: 'Hi, how are you?', counts:14},
        {message: 'I am very good!', counts:1}
    ]
let dialogs = [
        {id: 1, name: "Mariya"},
        {id: 2, name:"Yurii"}
    ]
let messages = [
        {id: 1, message: "Hello, how are you"},
        {id:2, message:"I am very good and you"},
        {id:3, message:"OK"}
    ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App postData={postData} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
