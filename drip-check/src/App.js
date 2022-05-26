import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DripCard from './DripCard';
import SwipeButtons from './SwipeButtons';
import Profile from './Profile';
import UploadForm from './UploadForm';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<><DripCard /><SwipeButtons/></>}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/upload-image' element={<UploadForm />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
