import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import Preview from "./components/Preview/Preview";
import Chats from "./components/Chats/Chats";
import ChatView from "./components/Chats/Chat/ChatView/ChatView";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <Switch>
              <Route path="/chats/view">
                <ChatView />
              </Route>

              <Route path="/chats">
                <Chats />
              </Route>
              <Route path="/preview">
                <Preview />
              </Route>
              <Route exact path="/">
                <WebcamCapture />
              </Route>
            </Switch>
          )}
        </Router>
      </div>
    </div>
  );
}

export default App;
