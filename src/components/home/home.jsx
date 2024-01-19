import React from "react"
import { getImageUrl } from "../../utils"
import styles from "./home.module.css"


export const Home = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I am Menuba tenny </h1>
            <p className={styles.description}> I'm a full stack web developer with over 2+ years of experience using Ruby on Rails, elixir, and React. I'm also a graduated GIS analyst. Reach out to me If you would like to know more! </p>
            <a className={styles.contactbtn} href="mailto:menubatenny@gmail.com">Contact me</a>
        </div>
        <img className= {styles.image} src={getImageUrl("home/heroImage.png")}/>
        <div className={styles.topblur}/>
        <div className={styles.bottomblur}/>

        
    </section> 
    );
}