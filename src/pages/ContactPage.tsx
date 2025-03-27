import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/contact.css';

const ContactPage = () => {
  return (
    <section className="team-section fade-in">
      <h2>Team</h2>
      <div className="team-row">
        <div className="card">
          <div className="container">
            <h2>Suvendu Dinda</h2>
            <p className="title">Co-Founder & Art</p>
            <p>MCA Department, RCCIIT Alumni</p>
            <p>mca2021027@rcciit.org.in</p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1MezUCCEnL/"><FaFacebook style={{ color: 'black' }} /></a>
              <a href="https://www.linkedin.com/in/suvendu-dinda-833947263"><FaLinkedin style={{ color: 'black' }} /></a>
              <a href="https://github.com/SUVENDU027"><FaGithub style={{ color: 'black' }} /></a>
              <a href="mailto:suvendudinda586@gmail.com"><FaEnvelope style={{ color: 'black' }} /></a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <h2>Jayanta Karmakar</h2>
            <p className="title">Co-Founder & Developer</p>
            <p>MCA Department, RCCIIT Alumni</p>
            <p>mca2021060@rcciit.org.in</p>
            <div className="social-links">
              <a href="https://www.facebook.com/jayantakarmakar998"><FaFacebook style={{ color: 'black' }} /></a>
              <a href="https://www.linkedin.com/in/jayanta-karmakar-496641140/"><FaLinkedin style={{ color: 'black' }} /></a>
              <a href="https://github.com/Jayanta-karmakar"><FaGithub style={{ color: 'black' }} /></a>
              <a href="https://x.com/Jayanta998"><FaTwitter style={{ color: 'black' }} /></a>
              <a href="mailto:jayantakarmakar998@gmail.com"><FaEnvelope style={{ color: 'black' }} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;