import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";
import {postChange} from "./redux/state";

const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} postChange={postChange} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}




rerenderTree(state);

subscribe(rerenderTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

