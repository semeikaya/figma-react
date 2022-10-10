import CounterLogo from "./copmonents/Header/CounterLogo";
import Menu from "./copmonents/Header/Menu";
import styles from "./Header.module.css";

function Header() {
    return <div className={styles.head}>
        <CounterLogo />
        <Menu />
    </div>;
}

export default Header;
