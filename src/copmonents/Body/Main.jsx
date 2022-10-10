import Buttons from "./Buttons";
import Count from "./Count";
import styles from "./Main.module.css";

function Main() {
    return (
        <div className={styles.main}>
            <Count />
            <Buttons />
        </div>
    );
}

export default Main;
