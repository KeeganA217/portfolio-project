import React, { useEffect } from "react";
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

  useEffect(() => {
    gsap.from(".page-title", {
      opacity: 0,
      duration: 2,
    });
    gsap.from(".card", {
      opacity: 0,
      duration: 1.5,
      y: 200,
      ease: "power1",
    });
  }, []);

  return (
    <div className="contact-page">
      <div className="page-title">
        <h1>Lets Get To Work!</h1>
      </div>
      <div className="card">
        <div className="left-div">
          <div className="contact-info">
            <i className="far fa-address-card contact"></i>
            <h3 className="contact-header">Phone Number</h3>
            <p className="contact-paragraph">318-210-4528</p>
            <h3 className="contact-header">Email Address</h3>
            <p className="contact-paragraph">Keegan.Adams15@gmail.com</p>
            <h3 className="contact-header">Current City</h3>
            <p className="contact-paragraph">St. Cloud, MN</p>
            <p>
              {" "}
              <a
                href="https://github.com/KeeganA217"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github social"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="right-div">
          <p style={{ fontWeight: "bolder" }}>...Or let me contact you!</p>
          <form onSubmit={sendEmail}>
            <label for="name">Name</label>
            <input type="text" name="name" required className="input-item" />
            <label for="email">Email</label>
            <input type="text" name="email" required className="input-item" />
            <label for="message">Message..</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
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
