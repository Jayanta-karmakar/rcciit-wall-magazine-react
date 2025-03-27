import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 RCC Institute of Information Technology. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.facebook.com/jayantakarmakar998" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://x.com/Jayanta998" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/jayantakarmakar998/" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/jayanta-karmakar-496641140/" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;