import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
  {
    id: '01',
    name: 'John'
  },
  {
    id: '02',
    name: "Andrii"
  },
  {
    id: '03',
    name: "Peter"
  }
];

const messagesData = [
  {
    id: '01',
    message: 'Hello'
  },
  {
    id: '02',
    message: "How are you?!"
  },
  {
    id: '03',
    message: "Yo!"
  }
];

const postsData = [
  {
    id: '01',
    text: 'Hello, how are you?',
    likesCount: '2'
  },
  {
    id: '02',
    text: "Hi, this is my first POST ))",
    likesCount: '5'
  },
  {
    id: '03',
    text: "Bye!"
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData} msgs={messagesData} posts={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
