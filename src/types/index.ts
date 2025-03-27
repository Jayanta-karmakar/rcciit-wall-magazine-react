export interface ImageData {
  src: string;
  alt: string;
  desc: string;
}

export interface ModalState {
  isOpen: boolean;
  currentImage: {
    src: string;
    desc: string;
  } | null;
}
