import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost} from "./redux/state";

export const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
