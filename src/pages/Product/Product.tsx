import React from 'react'
import styles from './Product.module.css'

const Product: React.FC = () => {
  return (
    <div className={styles.product}>
      <div className={styles.productContainer}>
        <h1 className={styles.productTitle}>Product</h1>
        <button className={styles.productBtn}>Create</button>
      </div>


    </div>
  )
}

export default Product