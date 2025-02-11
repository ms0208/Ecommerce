import React from 'react'
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar.jsx';
import {Routes , Route} from 'react-router-dom';
import AddProduct from '../../Components/AddProducts/AddProducts.jsx';
import ListProducts from '../../Components/ListProducts/ListProducts.jsx';


const Admin = () => {
  return (
    <div className='admin'>
       <Sidebar/>
       <Routes>
       <Route path = '/addproduct' element={<AddProduct/>}/>
       <Route path = '/listproduct' element={<ListProducts/>}/>
       </Routes>
    </div>
  )
}

export default Admin;
