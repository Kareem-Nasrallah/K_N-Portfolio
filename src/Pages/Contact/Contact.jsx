import { useEffect, useRef, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactMessage, setContactMessage] = useState("");

  const contactFormRef = useRef(null);
  const contactDataRef = useRef(null);

  useEffect(() => {
    const hide = () => {
      contactFormRef.current?.classList.add("show-items");
      contactDataRef.current?.classList.add("show-items");
    };
    setTimeout(hide, 0);
    return () => {
      contactDataRef.current?.classList.remove("show-items");
      contactFormRef.current?.classList.remove("show-items");
    };
  }, []);

  //   Email send functionality
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h2w87d8",
        "template_4ewkgnr",
        contactFormRef.current,
        "aUxqRxxoMyf0YHj9b"
      )
      .then(
        () => {
          setContactMessage("✅ Message sent successfully");
          setTimeout(() => setContactMessage(""), 5000);
          contactFormRef.current.reset();
        },
        () => {
          setContactMessage(
            "❌ Message not sent (Email activation period has ended)"
          );
        }
      );
  };

  return (
    <section id="contact">
      <div ref={contactDataRef} className="contactData fromright">
        <h2>
          <span>Conetact Me</span>
        </h2>
        <p>
          I will read all emails. Send me any massage you want and I'll get back
          to you
        </p>
        <p>
          I need your <b>Name</b> and <b>Email Address</b>, but don't worry you
          won't receive anything other than your reply.
        </p>
      </div>
      <div className="contactMail">
        <h2 className=" ">Send Me A Message</h2>
        <form
          className="fromright "
          ref={contactFormRef}
          id="contactForm"
          onSubmit={sendEmail}
        >
          <div className="contactGroup">
            <div className="contactBox">
              <input
                className="inputs"
                value={form.userName}
                onChange={(e) => setForm({ ...form, userName: e.target.value })}
                type="text"
                name="user_name"
                id="name"
                placeholder="User Name"
                required
              />
              <label className="mailLabels" htmlFor="name">
                User Name
              </label>
            </div>
            <div className="contactBox">
              <input
                className="inputs"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                name="user_email"
                id="email"
                placeholder="Email Address"
                required
              />
              <label className="mailLabels" htmlFor="email">
                Email Address
              </label>
            </div>
          </div>
          <div className="contactBox">
            <input
              className="inputs"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              type="text"
              name="user_subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <label className="mailLabels" htmlFor="subject">
              Subject
            </label>
          </div>
          <div className="contactBox contactTextarea">
            <textarea
              className="inputs"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              name="user_message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
            <label className="mailLabels" htmlFor="message">
              Message
            </label>
          </div>
          <button type="submit" className="btn submit">
            Send Message <i className="bx bx-send"></i>
          </button>
          <div className="contactMessageplace">
            <p id="contactMessage">{contactMessage}</p>
          </div>
        </form>
      </div>
      <div className="contactSocial">
        <img className="arrow" src="./portfolio/curved-arrow.svg" alt="" />
        <div className="contactSocialData">
          <p>Or message me on my social networks</p>
          <div className="social-icons">
            <a
              target="_blank"
              href="https://www.facebook.com/kareem.nasrallah.904"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kareem-nasrallah-181772282/"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a target="_blank" href="https://wa.me/+201276434424">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a target="_blank" href="https://t.me/Kareem_Nasrallah">
              <i className="bx bxl-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
