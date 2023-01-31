import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import ProfileContainer from './Components/Profile/ProfileContainer';
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderContainer/>
      <Navbar/>
     <div className="App-content">
        <Routes>
         
          <Route path="/dialogs" element={<DialogsContainer/>}/>
          <Route path="/users" element ={<UsersContainer/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/settings" element={<Settings/>}/>
          
        <Route path='/profile'element={<ProfileContainer  />}/>
        <Route path='/login'element={<Login />}/>


      
        </Routes>
      
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
