import React from 'react'
import {Language, NotificationsNone, Settings} from '@mui/icons-material/';

import styles from './Topbar.module.css'

const Topbar = () => {
   return (
       <div className={styles.topbar}>
           <div className={styles.topbarWrapper}>
               <div className={styles.logo}>adminpanel</div>
               <div className={styles.userInfo}>
                   <div className={styles.topbarIconContainer}>
                       <NotificationsNone />
                       <span className={styles.topbarIconBadge}>2</span>
                   </div>
                   <div className={styles.topbarIconContainer}>
                       <Language />
                       <span className={styles.topbarIconBadge}>2</span>
                   </div>
                   <div className={styles.topbarIconContainer}>
                       <Settings />
                   </div>

                    <div className="uerProfile">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QNpdWVbn28wBtMZbbTTKeEEUBQUxuV_3Hg&usqp=CAU" alt="" className={styles.topAvatar} />
                    </div>
               </div>
           </div>

       </div>
   )
}

export default Topbar