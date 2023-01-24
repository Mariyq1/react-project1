import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Navbar/>
     <div className="App-content">
        <Routes>
         <Route path="/profile" element={<Profile/>}/>
          <Route path="/dialogs" element={<DialogsContainer/>}/>
          <Route path="/users" element ={<UsersContainer/>}/>
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
