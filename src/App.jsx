import './App.css';

import { Route, Routes } from 'react-router-dom';

import AboutUsPage from './Pages/AboutUsPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import NotFoundPage from './Pages/NotFoundPage';
import SingUpPage from './Pages/SignupPage';

function App() {

  return (
    <>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutUS' element={<AboutUsPage/>}/>
        <Route path='/signup' element={<SingUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        <Route path='*' element={<NotFoundPage/>}/>
       </Routes>
    </>
  )
}

export default App
