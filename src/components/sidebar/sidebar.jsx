import React from "react";
import styles from "./sidebar.module.css"
import {FaGithub, FaLinkedin, FaFileDownload} from 'react-icons/fa'
import { IoMailSharp } from "react-icons/io5";


export const Sidebar = () => { 


    const links = [
        {
            id:1,
            child: (
                <>
                    LinkedIn 
                    <FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/menuba-tenny-mohan-b18089264/",
            style: 'rounded-top'
        },
        {
            id:2,
            child: (
                <>
                    GitHub 
                    <FaGithub size={30}/>
                </>
            ),
            href:"https://github.com/Menubatenny",
        },
        {
            id:3,
            child: (
                <>
                    Email 
                    <IoMailSharp size={30}/>
                </>
            ),
            href:"mailto: menubatenny@gmail.com",
        },
        {
            id:4,
            child: (
                <>
                    Resume 
                    <FaFileDownload size={30}/>
                </>
            ),
            href:"../../../public/favicon.ico",
            style: 'rounded-bottom'
        },
    ];



    return (
        <div className={styles.flex}>
            <ul>
                {links.map(({id, child, href, download}) => (

                <li key={id} className={styles.icons}>
                    <a href={href} className={styles.linknames} download={download} target="_blank" rel="noreferrer"> 
                        {child}
                    </a>
                </li>

                ))}
            </ul>
        </div>

    );
}