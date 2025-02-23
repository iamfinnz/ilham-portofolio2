import { useRef } from 'react';
import './Contact.css'
import Pyramid from "../../ui/Pyramid"
import { contactInfo } from '../../data'
import SocialHandles from '../../ui/SocialHandles'
import { BsFillSendFill } from 'react-icons/bs'

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi form
    if (!nameRef.current?.value || !emailRef.current?.value || !messageRef.current?.value) {
      alert('Harap isi semua field');
      return;
    }

    // Membuat pesan
    const message = `Nama: ${nameRef.current.value}
Email: ${emailRef.current.value}
Pesan: ${messageRef.current.value}`;

    // Encode message untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    // Nomor WhatsApp tujuan (format internasional tanpa + atau 0)
    const phoneNumber = '6285158465119';
    
    // Membuat URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Membuka WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <section id='contact'>
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk on your <span className="shine">greate project</span> together
            </h3>
            <div className="contact__options">
              {contactInfo.map((contact, index) => (
                <article className="option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="contact__content">
                    <div>
                      <h3 className="name">
                        {contact.name}
                      </h3>
                      <p className="text__muted line__clamp__1 value">
                        {contact.value}
                      </p>
                    </div>
                    <a href={contact.link} target="_blank"
                    className="btn">
                      <span className="btn__shine text">Message</span>
                      <div className="icon" style={{ background: contact.color }}>
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your full name"
              name="name" 
              required 
              ref={nameRef}
            />
            <input 
              type="email" 
              placeholder="Your email"
              name="email" 
              required 
              ref={emailRef}
            />
            <textarea 
              name="message" 
              rows={7} 
              placeholder="Your message"
              required
              ref={messageRef}
            ></textarea>
            <button 
              type="submit" 
              className="btn flex__center submit__btn"
            >
              <div className="icon"><BsFillSendFill /></div>
              <span>Send Now</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact