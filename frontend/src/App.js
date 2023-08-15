import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/video' element={<VideoPage/>}/>
    </Routes>
  )
}

export default App;
