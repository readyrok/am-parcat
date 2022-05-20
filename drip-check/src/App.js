import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DripCard from './DripCard';
import SwipeButtons from './SwipeButtons';
import Profile from './Profile';
import Upload from './Upload'
// import Autenthification from './routes/autenthification/autenthification.component';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<><DripCard /><SwipeButtons/></>}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/upload-image' element={<Upload />}/>
          {/* <Route path='/auth' element={<Autenthification/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
