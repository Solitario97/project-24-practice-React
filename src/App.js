import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';




const App =(props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='main-content'>
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage}/>}/>
            <Route path='/dialogs/*' element={<Dialogs state={props.state.messagePage}/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
