import React from 'react';
import {Route, Routes,} from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";

import styles from './App.module.css'

function App() {
    return (
    <div className="App">
      <Topbar />
        <div className={styles.container}>
          <Sidebar />
          <Routes>
            <Route  path={'/'}  element={<Home />} />
            <Route path={'/userList'} element={<UserList />} />
            <Route path={'/User/:userId'} element={<User /> } />
            <Route path={'/newUser'} element={<NewUser />}/>
            <Route path={'/products'} element={<ProductList />} />
            <Route path={'/products/:productId'} element={<Product />}/>
          </Routes>

        </div>
    </div>
  );
}

export default App;
