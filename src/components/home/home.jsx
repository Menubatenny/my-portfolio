import React from "react"
import { getImageUrl } from "../../utils"
import styles from "./home.module.css"


export const Home = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h2 className={styles.hello}> Hello, I am</h2>
            <h1 className={styles.title}>  Menuba tenny </h1>
            <p className={styles.description}> I'm a Full-stack web developer with over 2+ years of experience using Ruby on Rails, elixir, and React. I'm also a graduated GIS Analyst. Reach out to me, If you would like to know more! </p>
            <a className={styles.contactbtn} href="mailto:menubatenny@gmail.com">Contact me</a>
        </div>
        <img className= {styles.image} src={getImageUrl("home/home.png")}/>
        <div className={styles.topblur}/>
        <div className={styles.bottomblur}/>

        
    </section> 
    );
}