import React from "react";
import styles from "./about.module.css"


export const About = () => { 
    return (
    <section>
        <div className={styles.empty}> </div>

        <div className={styles.about} id="about">
        
            <div className={styles.container}>
                <h2 className={styles.heading}> About Me </h2>
                <div className={styles.content}>
                    <p>Hello! I am Menuba tenny, a front-end developer/React developer from India. As a developer, I am deeply interested in both design and coding, and I enjoy using React.js or Next.js to build web application interfaces and functionality. I have done my Bachelor's degree in Computer Science.</p>

                    <p>My interest in computers started at a very young age, and I was very eager to learn as much as I could about them. I remember my first website that I made years ago, which had a terrible interface and design. The purpose of it was to download movies and stuff like that. It is unfortunate that I don't have the code.</p>

                    <p>I have always had a strong interest in computers and technology. From a young age, I was eager to learn as much as possible. One of my earliest experiences with computers was creating my own website, which unfortunately had a terrible interface and design. Despite this, I was excited to be able to create something on my own and share it with others. The website's purpose was to allow users to download movies and other content. Unfortunately, I no longer have the code for this site, but it remains a memorable experience for me.</p>

                    <p>After this, I became more and more interested in web development and began to find resources to learn more about it. I watched many video tutorials, read through documentation and articles. The first programming language I learned was C, and from there, I also learned Python and C++. In addition to working with programming languages, I have also experimented with databases and have found that Firebase is my favorite so far. I have also used MySQL and Supabase few time. Even this website's static data comes from Supabase.</p>

                    <p>In addition to my work, I also enjoy writing about web development topics on my blog and on DEV as well. While I don't currently have much time or interest in playing video games. But, I do enjoy watching sci-fi movies and web series in my free time.</p>
                    <p>If you were to ask me what stack I would prefer, I would say:</p>
                    <ul> 

                        <li>Framework - Next.js</li>
                        <li>Database : Firebase</li>
                        <li>CSS - TailwindCSS</li>

                    </ul>
                    <p>You can do anything you can think of with these three things. Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites.</p>

                    <p>I love my work and take great enjoyment (sometimes frustration) in every project that I take on. Feel free to check out my portfolio. If you have any questions or are interested in working with me, don't hesitate to reach out to me on Twitter or you can send me a mail at me@j471n.in. I have also written an article explaining the process I followed to create my portfolio. You can also take a look at the full code at GitHub.</p>
                </div>
            </div>
        </div>
    </section>


    )
}