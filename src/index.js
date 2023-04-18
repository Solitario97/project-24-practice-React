import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


let Rerender = (state) =>{

  root.render(
      <React.StrictMode>
          <App 
          state={store.getState()}
          addPost={store.addPost.bind(store)}
          updatePostText={store.updatePostText.bind(store)}/>
      </React.StrictMode>
  );}

Rerender(store.getState());

store.subscribe(Rerender);





