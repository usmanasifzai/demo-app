import Link from 'next/link';

import Layout from '../components/layout';
import styles from '../styles/Home.module.css'
import Users from '../components/users';

const Home = () => (
  <Layout>
    <h1 className={styles.title}>
      Welcome!
    </h1>

    <div className={styles.userContainer}>
      <Users />

      <Link href="/users/new">
        Add User
      </Link>
    </div>
  </Layout>
)

export default Home;
