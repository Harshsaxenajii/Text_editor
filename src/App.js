import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import About from "./components/About";
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

      <div className="container">
        <Form shortHead="Please Enter The Text" mode={mode} />
      </div>

      {/* <div className="container my-3">
        <About />
      </div> */}
    </>
  );
}
export default App;
