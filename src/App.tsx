import React from 'react';
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Topbar />
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.others}></div>
        </div>
    </div>
  );
}

export default App;
