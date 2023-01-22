import React from 'react'
import HomeFooter from '../components/HomeFooter'
import HomeBody from '../components/HomeBody'
import HomeNavbar from '../components/HomeNavbar'
import styles from './Home.module.css'


const Home = () => {
  return (
    <div className={styles.home}>
        <HomeNavbar />
        <HomeBody />
        <HomeFooter />
    </div>
  )
}

export default Home