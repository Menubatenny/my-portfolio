import React from "react"
import styles from "./experience.module.css"
import {works} from "./work"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaLaptopCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";


export const Experience = () => {
    return (
        <div className={styles.experience} id="experience">
            <div className={styles.container}>
                <h1 className={styles.heading}> Experience </h1>
                <VerticalTimeline >
                    {works.map((work) => (
                    <VerticalTimelineElement key={work.key} date={work.date} icon={<FaLaptopCode/>} iconStyle={{background:"white"}} className={styles.verticalcontent}>
                        <h3 className={styles.timelinetitle}> {work.title}</h3>
                        <h5 className={styles.organisation}> {work.organization}</h5>     
                        <p className={styles.description}> {work.description}</p>
                    </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

