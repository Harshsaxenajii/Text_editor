import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
      <>
        {/*this is use of props 
    props are the those variables which is change page to page or the any event which is pass through the any event
    */}
        {/* <Navbar mainHead="HarshCode"/> */}

        <Navbar mainHead="TextEditor" mode={mode} toggleMode={toggleMode} />
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <div className="container">

            </div>
          </Route>
        </Switch> */}

              <Form shortHead="Please Enter The Text" mode={mode} />
        {/* <div className="container my-3">
        <About />
      </div> */}
    </>
  );
}
export default App;
