import React from 'react'
import styles from './WidgetSm.module.css'
import {Visibility} from "@mui/icons-material";
const WidgetSm = () => {
  return (
    <div className={styles.widgetSm}>
     <span className={styles.widgetSmTitle}>New Join Members</span>
      <ul className={styles.widgetSmList}>
        <li className={styles.widgetSmItem}>
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bprqdveT23zTtuyFKHv8W-CGtaRMn86R4w&usqp=CAU"}
            alt={'user'}
            className={styles.widgetSmUserImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Anna Keller</span>
            <span className={styles.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.widgetSmBtn}>
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm