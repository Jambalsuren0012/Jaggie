import React from 'react'
import styles from "./style.module.scss"
import { Typewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons';
import Particle from '../Particle';
  const Hero = () => {

    return (
      <div id='About' className={styles.Container}>
        <Particle />
        <div className={styles.HeroItem}>
          <div>
            <h1>Hi There I'm Jaggie</h1>
            <h1>
              I am the{" "}
              <span style={{ color: "#007FFF" }}>
                <Typewriter
                  words={["Software Engineer", "Developer", "Web Designer"]}
                  loop={false}
                />
              </span>
            </h1>
            <div className={styles.Icons}>
              <SocialIcon bgColor='#0081C9' network="twitter" url='https://www.facebook.com/'target={"_blank"} />
              <SocialIcon bgColor='#0081C9' network="google" url='' target={"_blank"} />
              <SocialIcon bgColor='#0081C9' network="instagram"url=''target={"_blank"} />
              <SocialIcon bgColor='#0081C9' network="youtube" url=''target={"_blank"}/>
              <SocialIcon bgColor='#0081C9' network="facebook" url=''target={"_blank"}/>
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