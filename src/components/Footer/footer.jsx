import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra quam ac nisl consequat, nec tincidunt libero ultricies.</p>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
            <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Your Company | Designed by Your Name
      </div>
    </footer>
  );
};

export default Footer;
