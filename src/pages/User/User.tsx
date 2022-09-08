import React from 'react'
import styles from './User.module.css'
import {
  CalendarToday,
  EmailOutlined,
  LocalActivityOutlined,
  LocationSearching,
  PermIdentity,
  PhoneAndroid, Publish
} from "@mui/icons-material";
import {Link} from "react-router-dom";

const User: React.FC = () => {
  return (
    <div className={styles.user}>
      <div className={styles.userTitleContainer}>
        <div className={styles.userTitle}>Edit User</div>
        <Link to='/newUser'>
          <button className={styles.userCreateBtn}>Create</button>
        </Link>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userShow}>
          <div className={styles.userShowTop}>
            <img
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JAfSaC28z85h3sLnb0IFaR9T0DbOhrwqQA&usqp=CAU'}
              alt={'user'}
              className={styles.userShowTopImg}
            />
            <div className={styles.userShowTopTitle}>
              <span className={styles.userShowTopName}>Dua Lipa</span>
              <span className={styles.userShowTopJob}>Software Engineer</span>
            </div>
          </div>
          <div className={styles.userShowBottom}>
            <span className={styles.userShowTitle}>Account Details</span>
            <div className={styles.userShowInfo}>
              <PermIdentity className={styles.userShowInfoIcon}/>
              <span className={styles.userShowInfoTitle}>dualipa@99</span>
            </div>
            <div className={styles.userShowInfo}>
              <CalendarToday className={styles.userShowInfoIcon}/>
              <span className={styles.userShowInfoTitle}>10.02.1999</span>
            </div>
            <span className={styles.userShowTitle}>Contact Details</span>
            <div className={styles.userShowInfo}>
            <PhoneAndroid className={styles.userShowInfoIcon}/>
            <span className={styles.userShowInfoTitle}>+1 230 70 80</span>
          </div>
            <div className={styles.userShowInfo}>
            <EmailOutlined className={styles.userShowInfoIcon}/>
            <span className={styles.userShowInfoTitle}>dualipa@gmail.com</span>
          </div>
          </div>
          <div className={styles.userShowInfo}>
            <LocationSearching className={styles.userShowInfoIcon}/>
            <span className={styles.userShowInfoTitle}>New York | USA</span>
          </div>

        </div>
        <div className={styles.userUpdate}>
          <span className={styles.userUpdateTitle} >Edit</span>
          <form className={styles.userUpdateForm}>
            <div className={styles.userUpdateLeft}>
              <div className={styles.userUpdateItem}>
                <label>Username</label>
                <input
                 type="text"
                 placeholder="dualupa99"
                 className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Dua Lupa"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="dualupa99@gmail.com"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 230 70 80"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Location</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className={styles.userUpdateInput}
                />
              </div>
            </div>
            <div className={styles.userUpdateRight}>
              <div className={styles.userUpdateUpload}>
                <img className={styles.userUpdateImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JAfSaC28z85h3sLnb0IFaR9T0DbOhrwqQA&usqp=CAU'} alt='Upload img' />
                <label htmlFor='file'><Publish className={styles.userUpdateIcon} /> </label>
                <input type='file' id='file' style={{display: 'none'}}/>
              </div>
              <button className={styles.userUpdateBtn}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User