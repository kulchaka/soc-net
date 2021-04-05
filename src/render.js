import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost} from "./redux/state";
import {postChange} from "./redux/state";

export const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} postChange={postChange} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
