import React from 'react';
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import {Route, Routes,} from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/user/User";

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
            <Route path={'/user/:userId'} element={<User /> } />
          </Routes>

        </div>
    </div>
  );
}

export default App;
