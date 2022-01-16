import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import "./Contact.css";
import avatar from "../../assets/Avatar.png";
import fb from "../../assets/icons/fb.png";
import git from "../../assets/icons/git.png";
import linkedin from "../../assets/icons/in.png";
import ins from "../../assets/icons/ins.png";
import mail from "../../assets/icons/mail.png";

const Contact = (props) => {
  return (
    <>
      <ParallaxLayer offset={2.6} speed={0} style={{ zIndex: -100 }}>
        <div className="contact">
          <div className="contact__web">
            <span className="contact__web--dot" />
            <span className="contact__web--dot" />
            <span className="contact__web--dot" />
          </div>
          <div className="contact__info">
            <a className="contact__info--gmail">
              <img src={mail} alt="email" />
              <p>charlenekwok499@gmail.com</p>
            </a>
            <div className="contact__info--icons">
              <a
                href="https://www.facebook.com/zhanxian.kwok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="facebook" />
              </a>
              <a
                href="https://github.com/CharleneKwok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/charlene-kwok-4383091b0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://www.instagram.com/charlenekwok_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ins} alt="ins" />
              </a>
            </div>
          </div>
          <img src={avatar} alt="avatar" className="contact__avatar" />
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Contact;
