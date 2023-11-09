import React from 'react';
import '../assets/scss/Contact.scss';
import TitleCard from './TitleCard';
const Contact = () => {
    // const handleSubmit = (event) => {
    //     event.preventDefault();
        
    // };

    return (
        <div id="Contact">
            <TitleCard name="Contact" path="https://via.placeholder.com/450" />
            <h1 id="contact-header">Let&rsquo;s Connect!</h1>
            <div id="contact-links">
                <h2><a href="mailto:mszczepaniakux@gmail.com" target="_blank" rel="noreferrer">Email</a></h2>
                <h2><a href="https://www.linkedin.com/in/martyna-szczepaniak-ux" target="_blank" rel="noreferrer">LinkedIn</a></h2>
                <h2><a href="https://wa.me/+48500136023" target="_blank" rel="noreferrer">WhatsApp</a></h2>
                <h2><a href="https://www.behance.net/martynaszczepa1" target="_blank" rel="noreferrer">Behance</a></h2>
            </div>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form> */}
        </div>
    );
};

export default Contact;