import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App(props) {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Navbar/>
     <div className="App-content">
        <Routes>
         <Route path="/profile" element={<Profile 
          profilePage={props.state.profilePage}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
          />}/>
          <Route path="/dialogs" element={<Dialogs 
          state={props.state.messagesPage}
          addMessage={props.addMessage}
          updateNewMessage={props.updateNewMessage}
          />}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
