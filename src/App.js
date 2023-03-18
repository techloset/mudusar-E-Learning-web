import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Blog from './pages/Blog';
import Course from './pages/Course';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/'  element={<Landing/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/courses' element={<Course/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
