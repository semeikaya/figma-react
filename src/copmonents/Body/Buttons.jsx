import styles from "./Buttons.module.css";
function Buttons() {
    return <div className= {styles.button}>
        <div className={styles.countup}>Увеличить</div>
        <div className={styles.countdown}>Уменьшить</div>
        <div className={styles.countclear}>Сбросить</div>
    </div>;
}

export default Buttons;