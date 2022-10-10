import styles from "./App.module.css";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function App() {
    return (
        <div>
            <Header />
            <hr className={styles.line} />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
