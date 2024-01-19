import React, {useState} from "react";
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"


export const Navbar = () => {
    const [ menuOpen, setMenuOpen] = useState(false);
    const [fix, setFix] = useState(false)

    function setFixed() {
        if(window.scrollY >= 150) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)

    return (
    <nav className= {styles.navbar}>
        <a className= {fix ? `${styles.title} ${styles.fixed}` : styles.title } href="/">Menuba tenny</a>
        <div className= {styles.menu}> 
            <img className={styles.menuBtn} 
                src={ menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                onClick={() => setMenuOpen(!menuOpen)}
            />

            <ul className= { `${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)} >

                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#experience"> Experience </a>
                </li>
                <li>
                    <a href="#project"> Project </a>
                </li>
                <li>
                    <a href="#blog"> Blog </a>
                </li>
                <li>
                    <a href="#contact"> Contact </a>
                </li>
            </ul>
        </div>
    </nav>
    );
}