import { useState, useEffect } from "react";
import { ImageData } from "../types";
import { imageData } from "../utils/imageData";

type ModalState = {
  isOpen: boolean;
  currentImage: {
    src: string;
    desc: string;
  } | null;
};

const Gallery = () => {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    currentImage: null,
  });
  const [shuffledImages, setShuffledImages] = useState<ImageData[]>([]);

  // Shuffle images on component mount
  useEffect(() => {
    const shuffled = [...imageData].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  const openModal = (src: string, desc: string) => {
    setModal({
      isOpen: true,
      currentImage: { src, desc },
    });
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      currentImage: null,
    });
    document.body.classList.remove("modal-open");
  };

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modal.isOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modal.isOpen]);

  return (
    <div id="gallery" className="gallery-container">
      <div className="gallery-grid">
        {shuffledImages.map((img, index) => (
          <div
            key={`${img.src}-${index}`}
            className="gallery-item"
            onClick={() => openModal(img.src, img.desc)}
          >
            <img
              src={img.thumbnail}
              alt={img.alt}
              loading="lazy"
              className="gallery-image"
            />
            <div className="desc">{img.desc}</div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {modal.isOpen && modal.currentImage && (
        <div id="imageModal" className="modal" style={{ display: "block" }}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            className="modal-content"
            src={modal.currentImage.src}
            alt={modal.currentImage.desc}
          />
          <div id="caption">{modal.currentImage.desc}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
