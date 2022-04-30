import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import UserSin from './pages/user/UserSin';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NewUser from './pages/newuser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
function App() {
  return(
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/> 
        <Routes>
          <Route exact path="/" element={<Home />}>
           
          </Route>
          <Route path="/users" element={<UserList />}>
            
          </Route>
          <Route path="/user/:userId" element={<UserSin />}>
            
          </Route>
          <Route path="/newUser" element={<NewUser />}>
            
          </Route>
          <Route path="/products" element={<ProductList />}>
            
          </Route>
          <Route path="/product/:productId" element={<Product />}>
            
          </Route>
          <Route path="/newproduct" element={<NewProduct />}>
            
          </Route>

          
        </Routes>
        
      </div>
    </Router>
  );
  
}

export default App;
