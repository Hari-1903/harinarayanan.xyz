import './App.css';
import {Routes,Route} from "react-router-dom";
import LandingPage from './pages/landing';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Experience from './pages/experience';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/experience' element={<Experience/>}/>
    </Routes>
  );
}

export default App;