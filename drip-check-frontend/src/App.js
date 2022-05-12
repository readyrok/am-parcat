import './App.css';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {/* <Route path="/profile">
            <h2> I am profile page </h2>
          </Route>
          <Route path="/">
            <h2> I am main page </h2>
          </Route> */}

        </Routes>        
      </Router>      
    </div>
  );
}

export default App;
