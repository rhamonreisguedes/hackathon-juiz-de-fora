import React from 'react'
import Footer from '../components/Footer'
import HomeBody from '../components/HomeBody'
import HomeNavbar from '../components/HomeNavbar'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
        <HomeNavbar />
        <HomeBody />
        <Footer />
    </div>
  )
}

export default Home