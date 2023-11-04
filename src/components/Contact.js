import React from 'react';

const Contact = () => {
    // const handleSubmit = (event) => {
    //     event.preventDefault();
        
    // };

    return (
        <div>
            <h1>Let&rsquo;s Connect!</h1>
            <h1><a href="mailto:mszczepaniakux@gmail.com" target="_blank" rel="noreferrer">Email</a></h1>
            <h1><a href="https://www.linkedin.com/in/martyna-szczepaniak-ux" target="_blank" rel="noreferrer">LinkedIn</a></h1>
            <h1><a href="https://wa.me/+48500136023" target="_blank" rel="noreferrer">WhatsApp</a></h1>
            <h1><a href="https://www.behance.net/martynaszczepa1" target="_blank" rel="noreferrer">Behance</a></h1>
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