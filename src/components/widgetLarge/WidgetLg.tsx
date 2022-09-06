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

        <tr className={styles.widgetLgRow}>
          <td className={styles.widgetLgUser}>
            <td className={styles.widgetLgUserInfo}>
              <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauTp_GTvoNQVQV19rVJJwdAfES8AnV1qKRw&usqp=CAU'} className={styles.widgetLgUserImg} alt={'user'}/>
              <span className={styles.widgetLgUsername}>Susan Carol</span>
            </td>
            <td className={styles.widgetLgDate}>2 Jun 2021</td>
            <td className={styles.widgetLgMoney}>$122.00</td>
            <td className={styles.widgetLgStatus}> <button className={styles.widgetLgBtn}>Approved</button> </td>
          </td>
        </tr>
        <tr className={styles.widgetLgRow}>
          <td className={styles.widgetLgUser}>
            <td className={styles.widgetLgUserInfo}>
              <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauTp_GTvoNQVQV19rVJJwdAfES8AnV1qKRw&usqp=CAU'} className={styles.widgetLgUserImg} alt={'user'}/>
              <span className={styles.widgetLgUsername}>Jessica Carol</span>
            </td>
            <td className={styles.widgetLgDate}>2 Jun 2021</td>
            <td className={styles.widgetLgMoney}>$122.00</td>
            <td className={styles.widgetLgStatus}> <button className={styles.widgetLgBtn}>Pending</button> </td>
          </td>
        </tr>
        <tr className={styles.widgetLgRow}>
          <td className={styles.widgetLgUser}>
            <td className={styles.widgetLgUserInfo}>
              <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauTp_GTvoNQVQV19rVJJwdAfES8AnV1qKRw&usqp=CAU'} className={styles.widgetLgUserImg} alt={'user'}/>
              <span className={styles.widgetLgUsername}>Matilda Carol</span>
            </td>
            <td className={styles.widgetLgDate}>2 Jun 2021</td>
            <td className={styles.widgetLgMoney}>$122.00</td>
            <td className={styles.widgetLgStatus}> <button className={styles.widgetLgBtn}>Rejected</button> </td>
          </td>
        </tr>
        <tr className={styles.widgetLgRow}>
          <td className={styles.widgetLgUser}>
            <td className={styles.widgetLgUserInfo}>
              <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauTp_GTvoNQVQV19rVJJwdAfES8AnV1qKRw&usqp=CAU'} className={styles.widgetLgUserImg} alt={'user'}/>
              <span className={styles.widgetLgUsername}>Monica Carol</span>
            </td>
            <td className={styles.widgetLgDate}>2 Jun 2021</td>
            <td className={styles.widgetLgMoney}>$122.00</td>
            <td className={styles.widgetLgStatus}> <button className={styles.widgetLgBtn}>Approved</button> </td>
          </td>
        </tr>

      </table>
    </div>
  )
}

export default WidgetLg
