import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
        </Routes>
        
      </div>
    </Router>
  );
  
}

export default App;
