import Gallery from "../components/Gallery";
import { imageData } from "../utils/imageData";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to RCCIIT Wall Magazine, MCA 21-23</h1>
          <div className="hero-buttons">
            <a href="#gallery" className="btn">
              View Gallery
            </a>
            <a href="/about" className="btn btn-outline">
              About College
            </a>
          </div>
        </div>
      </section>
      <Gallery imageData={imageData} />
    </>
  );
};

export default HomePage;
