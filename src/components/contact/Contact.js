import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import "./Contact.css";
import avatar from "../../assets/Avatar.png";
import fb from "../../assets/icons/fb.svg";
import git from "../../assets/icons/git.svg";
import linkedin from "../../assets/icons/in.svg";
import ins from "../../assets/icons/ins.svg";
import mail from "../../assets/icons/mail.svg";
import mailOpen from "../../assets/icons/mail-open.svg";
import reply from "../../assets/icons/Reply.svg";

const Contact = (props) => {
  return (
    <>
      <ParallaxLayer offset={2.5} speed={0.1} style={{ zIndex: -100 }}>
        <div className="contact">
          <div className="contact__web">
            <span className="contact__web--dot" />
            <span className="contact__web--dot" />
            <span className="contact__web--dot" />
          </div>
          <div className="contact__info">
            <img src={reply} width="80%" alt="reply message" />
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
          <div className="contact__me">
            <img src={avatar} alt="avatar" className="contact__avatar" />
            <div className="contact__email">
              <img src={mail} width="7%" alt="email" className="email" />
              <p>charlenekwok499@gmail.com</p>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Contact;
