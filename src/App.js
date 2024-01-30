
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Landing from './components/Landing'
import Login from './components/Login'
import AddQuestion from './components/AddQuestion';
import Error404 from './components/Error404';
import PrivateRoute from './components/PrivateRoute';
import Leaderboard from './components/Leaderboard.js';


function App() {


  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" exact element={<Landing />} />
        <Route path="/LeaderBoard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
        <Route path="/Home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/addQuestion" element={<PrivateRoute><AddQuestion /></PrivateRoute>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<Error404 />} />

      </Routes>

    </>
  )
}

export default App
