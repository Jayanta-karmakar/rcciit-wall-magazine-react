import "../styles/about.css";
import rccImage from "../assets/photos/cover/RCCIIT.jpeg";

const collegeInfo = {
  name: "RCC Institute of Information Technology (RCCIIT)",
  location: "Kolkata, West Bengal, India",
  established: 1999,
  affiliation: "Maulana Abul Kalam Azad University of Technology",
  website: "https://www.rcciit.org/",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2036.2609104286719!2d88.39653591143933!3d22.559544505621886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed09795e4836e886!2sRCC%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1658600921322!5m2!1sen!2sin",
};

const AboutPage = () => {
  return (
    <>
      <div className="about-section fade-in">
        <a href="https://www.rcciit.org/">
          <img src={rccImage} height="120px" width="120px" alt="RCCIIT Logo" />
        </a>
        <h1 className="about-title">About Us</h1>
        <p>
          RCC Institute of Information Technology (RCCIIT) is a government
          sponsored engineering college located in Kolkata, West Bengal, India.
        </p>
        <p>
          The college was established in 1999 and receives government aids from
          the Government of West Bengal. It is academically affiliated to
          Maulana Abul Kalam Azad University of Technology.
        </p>
      </div>

      <section className="map-section fade-in">
        <h5>Our Location</h5>
        <div className="container-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2036.2609104286719!2d88.39653591143933!3d22.559544505621886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed09795e4836e886!2sRCC%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1658600921322!5m2!1sen!2sin"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
