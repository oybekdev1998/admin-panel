import React from 'react';
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from './App.module.css'
import Home from "./pages/Home/Home";
import {Route, Routes,} from "react-router-dom";
import UserList from "./pages/UserList/UserList";

function App() {
    return (
    <div className="App">
      <Topbar />
        <div className={styles.container}>
          <Sidebar />
          <Routes>
            <Route  path={'/'}  element={<Home />} />
            <Route path={'/userList'} element={<UserList />} />
          </Routes>

        </div>
    </div>
  );
}

export default App;
