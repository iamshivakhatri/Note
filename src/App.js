import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";


function App() {
  return (
    <>
      <NoteState> 
        <Router>
          <Navbar/>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/About" element={<About />} />
          </Routes>
        </Router>
       </NoteState>

  
    </>
  );
}

export default App;
