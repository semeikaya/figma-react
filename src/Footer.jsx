import InformationButtons from "./copmonents/Footer/InformationButtons";
import NameCompany from "./copmonents/Footer/NameCompany";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.foot}>
            <InformationButtons />
            <NameCompany />
        </div>
    );
}

export default Footer;
