import React, {FC} from 'react'
import styles from './Sidebar.module.css'
import {
  AttachMoney, Email, Equalizer, Feedback,
  LineStyle, ManageAccounts, MessageSharp,
  Person, Report,
  Storefront,
  Timeline,
  TrendingUp,
} from '@mui/icons-material';
import {Link} from "react-router-dom";
const Sidebar: FC = () => {
  return (
   <div className={styles.sidebar}>
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarTitle}>Dashboard</div>
        <ul className={styles.sidebarList}>
          <Link to='/' className={styles.sidebarListItem}>
            <LineStyle className={styles.listItemIcon} />
            Home
          </Link>
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
          <Link to='/userList' className={styles.sidebarListItem}>
            <Person className={styles.listItemIcon} />
            Users
          </Link>
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
            <Email className={styles.listItemIcon} />
            Mail
          </li>
          <li className={styles.sidebarListItem}>
            <Feedback className={styles.listItemIcon} />
            Feedback
          </li>
          <li className={styles.sidebarListItem}>
            <MessageSharp className={styles.listItemIcon} />
            Messages
          </li>
        </ul>
      </div>
      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarTitle}>Staff</div>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <ManageAccounts className={styles.listItemIcon} />
            Manage
          </li>
          <li className={styles.sidebarListItem}>
            <Timeline className={styles.listItemIcon} />
            Analytics
          </li>
          <li className={styles.sidebarListItem}>
            <Report className={styles.listItemIcon} />
            Reports
          </li>
        </ul>
      </div>
    </div>
   </div>
 )
}

export default Sidebar