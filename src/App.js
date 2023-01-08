import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="App-content">
        <Routes>
          <Route path="/profile" element={<Profile postData={props.postData}/>}/>
          <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs}
          messages={props.messages}/>}/>
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
