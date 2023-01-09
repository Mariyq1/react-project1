import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Routes, Route } from 'react-router-dom';

function App(props) {
  
  return (
    
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="App-content">
        <Routes>
          <Route path="/profile" element={<Profile state={props.state.profilePage}/>}/>
          <Route path="/dialogs" element={<Dialogs state={props.state.messagesPage}/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      
      </div>
      
    </div>
    
  );
}

export default App;
