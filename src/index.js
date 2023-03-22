import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostsData = [
  {message: 'Hello, my name is Amir', count: '10'},
  {message: 'My first work with props', count: '300'},
  {message: 'several day`s ago i bought macbook', count: '1000'},
];

let DialogData = [
  {name:"Amir", id:'1'},
  {name:"Imran", id:'2'},
  {name:"Altair", id:'3'},
  {name:"Ecio", id:'4'},
  {name:"Franchesko", id:'5'},
]

let MessageData = [
  {message:'How are u?', id:'1'},
  {message:'Amir your two safes are full of money, where to put the money now', id:'2'},
  {message:'Have you already bought a Porsche or are you just going to get it ?', id:'3'},
  {message:"Let's fly to France for a couple of days on the way back", id:'4'},
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    PostsData={PostsData} 
    DialogData={DialogData} 
    MessageData={MessageData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
