import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Game from "./Game";
import LogIn from "./LogIn";
import reportWebVitals from "./reportWebVitals";

import {BrowserRouter as Router,Routes, Route,
  Redirect,Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
     <Router>
       <Routes>
        <Route path='/' element={<LogIn />}></Route>
        <Route path='/Game' element={<Game />}></Route>

       </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//source -> https://www.youtube.com/watch?v=9bXhf_TELP4
reportWebVitals();
