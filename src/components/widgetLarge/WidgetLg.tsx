import React from 'react'
import styles from './WidgetLg.module.css'

const WidgetLg = () => {
  return (
    <div className={styles.widgetLg}>
      <h3 className={styles.widgetLgTitle}>Latest transaction</h3>
      <table className={styles.widgetLgTable}>
        <tr className={styles.widgetLgRow}>
          <th className={styles.widgetLgTh}>Customer</th>
          <th className={styles.widgetLgTh}>Date</th>
          <th className={styles.widgetLgTh}>Amount</th>
          <th className={styles.widgetLgTh}>Status</th>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
