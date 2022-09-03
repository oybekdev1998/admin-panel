import React, {FC} from 'react';
import styles from './Featured.module.css'
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";

const FeaturedInfo: FC = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Revanue</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$2,434</span>
          <span className={styles.featuredMoneyRate}>-11.4 <ArrowDownward className={styles.featuredIconNegative} /></span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Sales</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$4,312</span>
          <span className={styles.featuredMoneyRate}>+2.34 <ArrowUpward className={styles.featuredIcon} /></span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Cost</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$3,120</span>
          <span className={styles.featuredMoneyRate}>-4.52 <ArrowDownward className={styles.featuredIconNegative} /></span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo;