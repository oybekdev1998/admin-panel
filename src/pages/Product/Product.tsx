import React from 'react'

import styles from './Product.module.css'

const Product: React.FC = () => {
  return (
    <div className={styles.product}>
      <div className={styles.productContainer}>
        <h1 className={styles.productTitle}>Product</h1>
        <button className={styles.productBtn}>Create</button>
      </div>
      <div className={styles.productCard}>
        <div className={styles.productTop}>
          <h3 className={styles.newUserTitle}>New Product</h3>
          <form className={styles.newUserForm}>
            <div className={styles.newUserItem}>
              <label>Name</label>
              <input type="text" placeholder="Apple Airpods" />
            </div>
            <div className={styles.newUserItem}>
              <label>In Stock</label>
              <select className={styles.newUserSelect} name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className={styles.newUserItem}>
              <label>Active</label>
              <select className={styles.newUserSelect} name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <button className={styles.newUserBtn}>Create</button>
          </form>
        </div>

        <div className={styles.productBottom}>
          <img className={styles.productBottomImg} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlVU1BCgGUEOK_N1mfWOGdHXVXFUXimlAKzg&usqp=CAU' alt="product"/>
          <div className={styles.productInfo}>
            <div className={styles.productItem}>
              <span className={styles.productInfoKey}>id:</span>
              <span className={styles.productInfoValue}>123</span>
            </div>
            <div className={styles.productItem}>
              <span className={styles.productInfoKey}>sales:</span>
              <span className={styles.productInfoValue}>5123</span>
            </div>
            <div className={styles.productItem}>
              <span className={styles.productInfoKey}>active:</span>
              <span className={styles.productInfoValue}>yes</span>
            </div>
            <div className={styles.productItem}>
              <span className={styles.productInfoKey}>in stock:</span>
              <span className={styles.productInfoValue}>no</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Product