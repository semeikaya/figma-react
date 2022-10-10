import styles from './CounterLogo.module.css'
import image from './Group1.svg'
function CounterLogo() {
    return (
        <img src={image} className={styles.logo}>
            
        </img>
    );
}

export default CounterLogo;