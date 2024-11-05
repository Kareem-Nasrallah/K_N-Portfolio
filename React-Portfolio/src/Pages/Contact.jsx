
const Contact = () => {
  return (
    <section id="contact">
    <div className="contactData">
        <h2>
        <span>Conetact Me</span>
        </h2>
        <p>
        I will read all emails. Send me any massage you want and Ill get back
        to you
        </p>
        <p>
        I need your <b>Name</b> and <b>Email Address</b>, but dont worry you
        wont receive anything other than your reply.
        </p>
    </div>
    <div className="contactMail">
        <h2 className="">Send Me A Message</h2>
        <form className="" action="#" id="contactForm">
        <div className="contactGroup">
            <div className="contactBox">
            <input className="inputs" type="text" name="user_name" id="name" placeholder="User Name" required />
            <label className="mailLabels" htmlFor="name">User Name</label>
            </div>
            <div className="contactBox">
            <input className="inputs" type="email" name="user_email" id="email" placeholder="Email Address" required />
            <label className="mailLabels" htmlFor="email">Email Address</label>
            </div>
        </div>
        <div className="contactBox">
            <input className="inputs" type="text" name="user_subject" id="subject" placeholder="Subject" required />
            <label className="mailLabels" htmlFor="subject">Subject</label>
        </div>
        <div className="contactBox contactTextarea">
            <textarea className="inputs" name="user_message" id="message" placeholder="Message" required defaultValue={""} />
            <label className="mailLabels" htmlFor="message">Message</label>
        </div>
        <button type="submit" className="btn submit">
            Send Message <i className="bx bx-send" />
        </button>
        <div className="contactMessageplace">
            <p id="contactMessage" />
        </div>
        </form>
    </div>
    <div className="contactSocial">
        <img className="arrow" src="./portfolio/curved-arrow.svg" alt />
        <div className="contactSocialData">
        <p>Or message me on my social networks</p>
        <div className="social-icons">
            <a target="_blank" href="https://www.facebook.com/kareem.nasrallah.904">
            <i className="bx bxl-facebook" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/kareem-nasrallah-181772282/">
            <i className="bx bxl-linkedin" />
            </a>
            <a target="_blank" href="https://wa.me/+201276434424">
            <i className="bx bxl-whatsapp" />
            </a>
            <a target="_blank" href="https://t.me/Kareem_Nasrallah">
            <i className="bx bxl-telegram" />
            </a>
        </div>
        </div>
    </div>
    </section>

  )
}

export default Contact