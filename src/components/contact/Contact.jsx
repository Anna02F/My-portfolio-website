import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal";
//Import icons
import { HiOutlineMail } from "react-icons/hi";

import "./contact.css";

const Contact = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);

    //Form animation
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_a3uoyel",
            "template_6hyqy0t",
            form.current,
            "FnKVjoHFQfZF2yPfx"
        );
        e.target.reset();
    };
    return (
        <section id="contact" className="contact">
            <div className="section__header">
                <h2>Contact Me</h2>
            </div>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="card">
                        <HiOutlineMail />
                        <h4>Email</h4>
                        <h5>anna.aghajanyan987@gmail.com</h5>
                        <a
                            href="mailto:anna.aghajanyan987@gmail.com"
                            target="_blank"
                            rel="noreferer"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail} className="form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    ></input>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    ></input>
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="btn btn--primary"
                        onClick={() => setIsSubmitted(true)}
                    >
                        Send Me a Message
                    </button>
                    {isSubmitted && <Modal closeModal={setIsSubmitted} />}
                </form>
            </div>
        </section>
    );
};

export default Contact;
