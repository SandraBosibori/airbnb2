import styles from './nav.module.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


const Nav=()=>{
    return(
        <nav className={styles.nav}>
            <div className="logo">
                <img src={logo} alt='Logo'/>
            </div>
            <div className={styles.input}>
                <input  type='text' placeholder='Search'/>

            </div>
            <div className="">
            <FontAwesomeIcon icon={faGlobe} />
                <button>Airbnb your home</button></div>
        </nav>
    )
}
export default Nav