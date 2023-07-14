import React, { useEffect } from 'react'

// Pages
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import Blog from "./pages/Blogs/Blog/Blog";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";
import News from "./pages/Newsletters/News/News";
import Newsletters from "./pages/Newsletters/Newsletters";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// React Router Dom
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top : 0, behavior : 'smooth'});
  }, [location]);

  return (
    <div className="app">
      <Navbar/>
      <div className="app__main">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/news/:id' element={<News/>} />
          <Route path='/blog/:id' element={<Blog/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/newsletters' element={<Newsletters/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App