import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./project.module.css";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";



export const Project = () => {
  return (
    <div className={styles.project} id="project">
        <div className={styles.container}>
            <h2 className={styles.heading}>Project</h2>

            <div className={styles.allcards}>

                <div className={styles.card}>
                    <div className={styles.image}> 
                        <img src={getImageUrl("projects/project.png")} />
                    </div>
                    <div className={styles.content}>
                        <h1>e-commerce website Ruby on Rails</h1>
                        <p>This web app is built using a JavaScript library called draft.js, which enables the rich text editing functionality of the app. When a user creates or edits a document, draft.js handles the rendering of the text, including the ...</p>
                        <div className={styles.stack}> 
                            <div>Ruby on rails</div>
                            <div>Rest API</div>
                            <div>Stripe</div>
                        </div>
                        <div className={styles.links}>
                            <h2><FaGithub/></h2>
                            <h2><LuExternalLink/></h2>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.image}> 
                        <img src={getImageUrl("projects/project.png")} />
                    </div>
                    <div className={styles.content}>
                        <h1>e-commerce website Ruby on Rails</h1>
                        <p>This web app is built using a JavaScript library called draft.js, which enables the rich text editing functionality of the app. When a user creates or edits a document, draft.js handles the rendering of the text, including the ...</p>
                        <div className={styles.stack}> 
                            <div>Ruby on rails</div>
                            <div>Rest API</div>
                            <div>Stripe</div>
                        </div>
                        <div className={styles.links}>
                            <h2><FaGithub/></h2>
                            <h2><LuExternalLink/></h2>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.image}> 
                        <img src={getImageUrl("projects/project.png")} />
                    </div>
                    <div className={styles.content}>
                        <h1>e-commerce website Ruby on Rails</h1>
                        <p>This web app is built using a JavaScript library called draft.js, which enables the rich text editing functionality of the app. When a user creates or edits a document, draft.js handles the rendering of the text, including the ...</p>
                        <div className={styles.stack}> 
                            <div>Ruby on rails</div>
                            <div>Rest API</div>
                            <div>Stripe</div>
                        </div>
                        <div className={styles.links}>
                            <h2><FaGithub/></h2>
                            <h2><LuExternalLink/></h2>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.image}> 
                        <img src={getImageUrl("projects/project.png")} />
                    </div>
                    <div className={styles.content}>
                        <h1>e-commerce website Ruby on Rails</h1>
                        <p>This web app is built using a JavaScript library called draft.js, which enables the rich text editing functionality of the app. When a user creates or edits a document, draft.js handles the rendering of the text, including the ...</p>
                        <div className={styles.stack}> 
                            <div>Ruby on rails</div>
                            <div>Rest API</div>
                            <div>Stripe</div>
                        </div>
                        <div className={styles.links}>
                            <h2><FaGithub/></h2>
                            <h2><LuExternalLink/></h2>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.image}> 
                        <img src={getImageUrl("projects/project.png")} />
                    </div>
                    <div className={styles.content}>
                        <h1>e-commerce website Ruby on Rails</h1>
                        <p>This web app is built using a JavaScript library called draft.js, which enables the rich text editing functionality of the app. When a user creates or edits a document, draft.js handles the rendering of the text, including the ...</p>
                        <div className={styles.stack}> 
                            <div>Ruby on rails</div>
                            <div>Rest API</div>
                            <div>Stripe</div>
                        </div>
                        <div className={styles.links}>
                            <h2><FaGithub/></h2>
                            <h2><LuExternalLink/></h2>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.image}> 
                        <img src={getImageUrl("projects/project.png")} />
                    </div>
                    <div className={styles.content}>
                        <h1>e-commerce website Ruby on Rails</h1>
                        <p>This web app is built using a JavaScript library called draft.js, which enables the rich text editing functionality of the app. When a user creates or edits a document, draft.js handles the rendering of the text, including the ...</p>
                        <div className={styles.stack}> 
                            <div>Ruby on rails</div>
                            <div>Rest API</div>
                            <div>Stripe</div>
                        </div>
                        <div className={styles.links}>
                            <h2><FaGithub/></h2>
                            <h2><LuExternalLink/></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}