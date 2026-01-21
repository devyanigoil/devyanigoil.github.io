import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-section">
      <h1>GET IN TOUCH</h1>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span><strong>Email:</strong> <a href="mailto:goildevyani1@gmail.com">goildevyani1@gmail.com</a></span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="location-icon" />
          <span><strong>Location:</strong> Cupertino, CA, USA</span>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25509.45090270958!2d-122.06460929076526!3d37.32125095256333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb45af392ec01%3A0x1271c2a31354c128!2sResults%20Way%2016%2C%2016%20Results%20Way%2C%20Cupertino%2C%20CA%2095014%2C%20USA!5e0!3m2!1sen!2sin!4v1769005426972!5m2!1sen!2sin"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721447.95101297!2d-75.67000994217914!3d42.142087767245414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6ce020a71240f%3A0xd5751d15974c2fdc!2sAmherst%2C%20MA%2C%20USA!5e0!3m2!1sen!2sin!4v1736163738783!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
