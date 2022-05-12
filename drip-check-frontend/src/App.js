import './App.css';
import Header from './Header.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DripCard from './DripCard.js';
import SwipeButtons from './SwipeButtons';
import Profile from './Profile.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<><DripCard /><SwipeButtons/></>}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
