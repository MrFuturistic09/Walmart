import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from './components/layout';
import Home  from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProductsList from './pages/admin/products/productsList';
import Cart from './pages/cart';


function App(){
  return( 
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/admin/products' element={<ProductsList />} />
      <Route path='*' element={<NotFound />} />

    </Routes>

    <Footer/>
    </BrowserRouter>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
