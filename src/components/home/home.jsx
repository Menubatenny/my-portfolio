import React, {useEffect, useRef} from "react"
import { getImageUrl } from "../../utils"
import styles from "./home.module.css"
import { motion} from "framer-motion"



export const Home = () => {
    return (
    <section className={styles.container}>

    <motion.div className={styles.content}  variants = {{ hidden: {opacity: 0}, visible: { opacity: 1} }}
        initial= "hidden"
        animate= "visible"
        transition= {{duration: 0.5, delay:0.25}}>

        <h2 className={styles.hello}> Hello, I am</h2>
        <h1 className={styles.title}>  Menuba tenny </h1>
        <p className={styles.description}> I'm a Full-stack web developer with over 2+ years of experience using Ruby on Rails, elixir, and React. I'm also a graduated GIS Analyst. Reach out to me, If you would like to know more! </p>
        <a className={styles.contactbtn} href="mailto:menubatenny@gmail.com">Contact me</a>
        <div className={styles.stack}><h2> Tech stack |   </h2>
        <h1 className={styles.icons}>
        <img src={getImageUrl("icons/react-.png")}/>
        <img src={getImageUrl("icons/nodejs.png")}/>
        <img src={getImageUrl("icons/elixir.png")}/>
        <img src={getImageUrl("icons/ror.png")}/>
        <img src={getImageUrl("icons/python.png")}/>
        <img src={getImageUrl("icons/git.png")}/>
        </h1>
        </div>
    </motion.div>

        <img className= {styles.image} src={getImageUrl("home/home.png")}/>
        <div className={styles.topblur}/>
        <div className={styles.bottomblur}/>

        
    </section> 
    );
}