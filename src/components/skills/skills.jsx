import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./skills.module.css";

export const Skill = () => {
  return (
    <div className={styles.skillpage} id="experience">
      <div className={styles.container}>
        <h2 className={styles.heading}>My Top Skills</h2>

        <div className={styles.skills}>
          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/html.png")} />
            <p>HTML</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/css.png")} />
            <p>CSS</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/javascript.png")} />
            <p>Javascript</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/nodejs.png")} />
            <p>Node.js</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/ror.png")} />
            <p>Ruby on Rails</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/elixir.png")} />
            <p>Elixir</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/sql.png")} />
            <p>My Sql</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/postgres.png")} />
            <p>Postgresql</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/docker.png")} />
            <p>Docker</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/aws.png")} />
            <p>AWS</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/python.png")} />
            <p>Python</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/github.png")} />
            <p>GitHub</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/gitlab.png")} />
            <p>GitLab</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/figma.png")} />
            <p>Figma</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/gitlab.png")} />
            <p>Tailwind Css</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/gitlab.png")} />
            <p>Express.js</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/react-.png")} />
            <p>React.js</p>
          </div>

          <div className={styles.skillcontent}>
            <img src={getImageUrl("icons/mongodb.png")} />
            <p>Mongo db</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
