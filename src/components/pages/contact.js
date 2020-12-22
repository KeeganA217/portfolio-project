import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "keegan217",
        "template_pk0xzms",
        e.target,
        "user_oKIPhGo0ywXSCRteEikb8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const left = useRef(null);
  const middle = useRef(null);
  const right = useRef(null);

  useEffect(() => {
    gsap.from(left.current, {
      opacity: 0,
      duration: 1.9,
      x: 200,
      ease: "power1",
    });
    gsap.from(middle.current, {
      opacity: 0,
      duration: 1.5,
      y: -190,
      delay: 0.2,
    });
    gsap.from(right.current, {
      opacity: 0,
      duration: 1.9,
      x: -200,
      ease: "power1",
    });
  }, []);

  return (
    <div className="contact-page">
      <div className="page-title">
        <h1>Lets Get To Work!</h1>
      </div>
      <div className="card">
        <div className="left-div" ref={left}>
          <div className="contact-info">
            <i className="far fa-address-card contact"></i>
            <h3 className="contact-header">Phone Number</h3>
            <p className="contact-paragraph">318-210-4528</p>
            <h3 className="contact-header">Email Address</h3>
            <p className="contact-paragraph">Keegan.Adams15@gmail.com</p>
            <h3 className="contact-header">Current City</h3>
            <p className="contact-paragraph">St. Cloud, MN</p>
          </div>
        </div>
        <div className="middle-div" ref={middle}>
          <a
            href="https://github.com/KeeganA217"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github social"></i>
          </a>
          <a href="/#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin social"></i>
          </a>
        </div>
        <div className="right-div" ref={right}>
          <p>...Or let me contact you!</p>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="input-item"
              autoComplete="chrome-off"
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              required
              className="input-item"
              autoComplete="chrome-off"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message..."
              required
              className="input-item"
            ></textarea>
            <input type="submit" value="Send" className="input-item btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
