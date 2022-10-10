import styles from './Menu.module.css'

function Menu() {
    return (
        <div className= {styles.menucontainer}>
            <ul className={styles.list}>
                <li>Главная</li>
                <li>О нас</li>
                <li>Контакты</li>
            </ul>
        </div>
    );
}

export default Menu;