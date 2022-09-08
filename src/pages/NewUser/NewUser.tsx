import React from 'react'
import styles from './NewUser.module.css'

const NewUser: React.FC = () => {
  return (
    <div className={styles.newUser}>
      <h3 className={styles.newUserTitle}>New User</h3>
      <form className={styles.newUserForm}>
        <div className={styles.newUserItem}>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className={styles.newUserItem}>
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className={styles.newUserItem}>
          <label>Email</label>
          <input type="text" placeholder="john@gmail.com" />
        </div>
        <div className={styles.newUserItem}>
          <label>Password</label>
          <input type="password"  />
        </div>
        <div className={styles.newUserItem}>
          <label>Phone</label>
          <input type="text" placeholder="+1 203 45 56" />
        </div>
        <div className={styles.newUserItem}>
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className={styles.newUserItem}>
          <label>Gender</label>
          <div className={styles.newUserGender}>
            <input type="radio" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" value="other" />
            <label htmlFor="male">Other</label>
          </div>
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
  )
}

export default NewUser