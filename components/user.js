import styles from '../styles/User.module.css';

const User = ({ user }) => (
  <div className="container">
    <span className={styles.name}>{user.name}</span>
    <span className={styles.email}>{user.email}</span>
  </div>
)

export default User
