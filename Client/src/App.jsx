import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shope/Shope.jsx';
import ShopCategory from './pages/Shopecategory/Shopcategory.jsx';
import Product from './pages/Product/Product.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Login from './pages/Login/Login.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png';
import women_banner from './Components/Assets/Frontend_Assets/banner_women.png';
import kid_banner from './Components/Assets/Frontend_Assets/banner_kids.png';
function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default App
