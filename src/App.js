import React, { useEffect } from 'react'

// Pages
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";
import Article from "./pages/Article/Article";
import Newsletters from "./pages/Newsletters/Newsletters";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// React Router Dom
import { Routes, Route, useLocation } from 'react-router-dom';

// Context API
import State from "./context/State.jsx";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top : 0, behavior : 'smooth'});
  }, [location]);

  return (
    <div className="app">
      <Navbar/>
      <div className="app__main">
        <State>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/blog/:id' element={<Article/>} />
            <Route path='/news/:id' element={<Article/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/newsletters' element={<Newsletters/>} />
          </Routes>
        </State>
      </div>
      <Footer/>
    </div>
  )
}

export default App