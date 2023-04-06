import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updatePostText} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let Rerender = (state) =>{

  root.render(
      <React.StrictMode>
          <App state={state}
                addPost={addPost}
                updatePostText={updatePostText}/>
      </React.StrictMode>
  );}

Rerender(state);

subscribe(Rerender);





