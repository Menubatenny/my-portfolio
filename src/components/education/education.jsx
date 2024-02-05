import React from "react"
import styles from "./education.module.css"
import {courses} from "./edu-list"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaGraduationCap } from "react-icons/fa";


export const Education = () => {
    return (
        <div className={styles.education} id="education">
            <div className={styles.container}>
                <h1 className={styles.heading}> Education </h1>
                <VerticalTimeline >
                    {courses.map((course) => (
                    <VerticalTimelineElement key={course.key} date={course.date} icon={<FaGraduationCap/>} iconStyle={{background:"white"}} className={styles.verticalcontent}>
                        <h3 className={styles.timelinetitle}> {course.title}</h3>
                        <h5 className={styles.organisation}> {course.organization}</h5>     
                        <p className={styles.description}> {course.description}</p>
                    </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

