import React from 'react'
import styles from "./style.module.scss"
import { Typewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons';
  const Hero = () => {
    return (
      <div className={styles.Container}>
        <div className={styles.HeroItem}>
          <div>
            <h1>Hello My name is Jambalsuren</h1>
            <h1>
              I am the{" "}
              <span style={{ color: "#007FFF" }}>
                <Typewriter
                  words={["React Developer", "UI Designer", "Software Engineer"]}
                  loop={false}
                />
              </span>
            </h1>
            <div className={styles.Icons}>
              <SocialIcon network="twitter" />
              <SocialIcon network="google" />
              <SocialIcon network="instagram" />
              <SocialIcon network="youtube" />
              <SocialIcon network="facebook" />
            </div>
          </div>
        </div>
        <div className={styles.HeroItem}>
          <div className={styles.ImgContainer}>
            <img
              src="https://jumeslaw.com/wp-content/uploads/2021/04/screenshot--724x675.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };
export default Hero