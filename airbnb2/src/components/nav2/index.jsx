import rooms from '../../assets/rooms.jpg'
import countryside from '../../assets/countryside.jpg'
import pool from '../../assets/pool.jpg'
import play from '../../assets/play.jpg'
import parks from '../../assets/parks.jpg'
import bed  from '../../assets/bed.jpg'
import beachfront from '../../assets/beachfront.jpg'
import tinyhomes from '../../assets/tinyhomes.jpg'
import views from '../../assets/views.jpg'
import omg from '../../assets/omg.jpg'
import styles from './nav2.module.css'

const Nav2=()=>{
    return(
     <>
        <div className={styles.nav2}>
            <img src={rooms}/>
            <img src={countryside}/>
            <img src={pool}/>
            <img src={play}/>
            <img src={parks}/>
            <img src={bed}/>
            <img src={beachfront}/>
            <img src={tinyhomes}/>
            <img src={views}/>
            <img src={omg}/>

        </div>
     </>
    )
}
export default Nav2