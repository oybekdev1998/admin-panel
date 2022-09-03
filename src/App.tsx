import React from 'react';
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from './App.module.css'
import Home from "./pages/Home/Home";

function App() {
    return (
    <div className="App">
      <Topbar />
        <div className={styles.container}>
          <Sidebar />
          <Home />
        </div>
    </div>
  );
}

export default App;
