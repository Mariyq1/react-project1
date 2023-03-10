import React, {Component, Suspense, lazy } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import ProfileContainer from './Components/Profile/ProfileContainer';
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from './Components/Users/UsersContainer.tsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './red/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';
import HeaderContainer from './Components/Header/HeaderContainer';
const DialogsContainer = lazy(() => import("./Components/Dialogs/DialogsContainer"));


class App extends Component {
  componentDidMount(){
        this.props.initializeApp()
    }
  render(){
    if(!this.props.inisialized){
       return<Preloader/>
    }
  
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderContainer/>
      <Navbar/>
     <div className="App-content">
      <Suspense fallback={<Preloader />}>
        <Routes>
         
          <Route path="/dialogs" element={<DialogsContainer/>}/>
          <Route path="/users" element ={<UsersContainer pageTitle={"Hello"}/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/settings" element={<Settings/>}/>
          
          <Route path='/profile/:userId'
             element={<ProfileContainer  />}/>
             <Route path='/profile' element={<ProfileContainer/>}/>      
        <Route path='/login'element={<Login />}/>
        </Routes>
        </Suspense>
      
      </div>
    </div>
    </BrowserRouter>
  );
}
}
const mapStateToProps = (state) => ({
  inisialized:state.app.inisialized
})
export default connect (mapStateToProps, {initializeApp}) (App);
