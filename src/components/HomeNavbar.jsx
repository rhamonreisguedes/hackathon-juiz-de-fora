import styles from './HomeNavbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../images/logoHome.png'



const HomeNavbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <Link to='/'>
                <img src={logo} alt={'logo'} className={styles.logoImg}/>
            </Link>
        </div>
        <div className={styles.middle}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/paciente'>Paciente</Link></li>
                <li><Link to='/perfil'>Perfil</Link></li>
            </ul>
        </div>
        <div className={styles.logout}>
            <Link to='/logout'></Link>
        </div>
    </div>
  )
}

export default HomeNavbar