/* eslint-disable no-unreachable */
import styles from "./Banner.module.css";


function Banner({image}) {
  return(
    <div 
    className={styles.banner}
    style={{ backgroundImage:`url('/images/images-banners/banner-${image}.png')`}}
    ></div>
  )
}

export default Banner;