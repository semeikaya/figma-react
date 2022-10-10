import image from "./CountLogo.svg";
import styles from "./InformationButton.module.css";

function InformationButtons() {
    return (
        <div className={styles.infcontainer}>
            <img src={image} className={styles.logo} alt=""></img>
            <div className={styles.partners}>Партнерам</div>
            <div className={styles.devs}>Разработчикам</div>
            <div className={styles.vacancy}>Вакансии</div>
        </div>
    );
}

export default InformationButtons;
