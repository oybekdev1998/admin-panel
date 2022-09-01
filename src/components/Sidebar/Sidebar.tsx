import React from 'react'
import styles from './Sidebar.module.css'
import {
  AttachMoney, Equalizer,
  LineStyle,
  Person,
  Storefront,
  Timeline,
  TrendingUp,
} from '@mui/icons-material';
const Sidebar = () => {
  return (
   <div className={styles.sidebar}>
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarTitle}>Dashboard</div>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <LineStyle className={styles.listItemIcon} />
            Home
          </li>
          <li className={styles.sidebarListItem}>
            <Timeline className={styles.listItemIcon} />
            Analytics
          </li>
          <li className={styles.sidebarListItem}>
            <TrendingUp className={styles.listItemIcon} />
            Sales
          </li>
        </ul>
      </div>
      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarTitle}>Quick Menu</div>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <Person className={styles.listItemIcon} />
            Users
          </li>
          <li className={styles.sidebarListItem}>
            <Storefront className={styles.listItemIcon} />
            Products
          </li>
          <li className={styles.sidebarListItem}>
            <AttachMoney className={styles.listItemIcon} />
            Transactions
          </li>
          <li className={styles.sidebarListItem}>
            <Equalizer className={styles.listItemIcon} />
            Reports
          </li>
        </ul>
      </div>
      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarTitle}>Notifications</div>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <LineStyle className={styles.listItemIcon} />
            Home
          </li>
          <li className={styles.sidebarListItem}>
            <Timeline className={styles.listItemIcon} />
            Analytics
          </li>
          <li className={styles.sidebarListItem}>
            <TrendingUp className={styles.listItemIcon} />
            Sales
          </li>
        </ul>
      </div>
      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarTitle}>Staff</div>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <LineStyle className={styles.listItemIcon} />
            Home
          </li>
          <li className={styles.sidebarListItem}>
            <Timeline className={styles.listItemIcon} />
            Analytics
          </li>
          <li className={styles.sidebarListItem}>
            <TrendingUp className={styles.listItemIcon} />
            Sales
          </li>
        </ul>
      </div>
    </div>
   </div>
 )
}

export default Sidebar