import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomeLoader from './components/loader/HomeLoader';
import Navbar from './components/Navbar/Navbar';
import BlogDetails from './pages/BlogDetails';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<HomeLoader />}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>

        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
