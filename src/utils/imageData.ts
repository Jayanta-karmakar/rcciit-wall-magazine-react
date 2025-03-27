// src/types/ImageData.ts
export interface ImageData {
  src: string; // Full-size image path
  alt: string; // Alt text
  desc: string; // Description
  thumbnail: string; // Thumbnail path
}

// Get all full-size photos
const photoModules = import.meta.glob("../assets/photos/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

// Get all thumbnails
const thumbnailModules = import.meta.glob("../assets/thumbs/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

// Helper to extract clean display names
const getDisplayName = (filename: string): string => {
  return filename
    .replace(/\.[^/.]+$/, "") // Remove extension
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\d+/g, "") // Remove numbers
    .replace(/[()]/g, "") // Remove parentheses
    .replace(/\s+/g, " ") // Collapse multiple spaces
    .trim();
};

// Match thumbnails to their full-size counterparts
export const imageData: ImageData[] = Object.entries(photoModules).map(
  ([photoPath, photoSrc]) => {
    const filename = photoPath.split("/").pop()!;
    const baseName = getDisplayName(filename);

    // Find corresponding thumbnail
    const thumbnailPath = `../assets/thumbs/${filename}`;
    const thumbnailSrc = thumbnailModules[thumbnailPath] || photoSrc;

    return {
      src: photoSrc as string,
      thumbnail: thumbnailSrc as string,
      alt: baseName,
      desc: baseName,
    };
  }
);

// Utility function to ensure thumbnail fallback
export const getThumbnail = (src: string): string => {
  const filename = src.split("/").pop()!;
  const thumbnail = thumbnailModules[`../assets/thumbs/${filename}`];
  return thumbnail ? (thumbnail as string) : src;
};

// export const imageData: ImageData[] = [
//     { src: AbhijitMaitra2, alt: 'Abhijit Maitra', desc: 'Abhijit Maitra' },
//     { src: '../assets/photos/Abhijit_Maitra (2).jpg', alt: 'Abhijit Maitra', desc: 'Abhijit Maitra' },
//     { src: '../assets/photos/Abhijit_Maitra (3).jpg', alt: 'Abhijit Maitra', desc: 'Abhijit Maitra' },
//     { src: '../assets/photos/Abhijit_Maitra (4).jpg', alt: 'Abhijit Maitra', desc: 'Abhijit Maitra' },
//     { src: '../assets/photos/Abhijit_Maitra (5).jpg', alt: 'Abhijit Maitra', desc: 'Abhijit Maitra' },
//     { src: '../assets/photos/Anamika.jpeg', alt: 'Anamika Ghorui', desc: 'Anamika Ghorui' },
//     { src: '../assets/photos/Anushka_Sen (1).jpg', alt: 'Anuska Sen', desc: 'Anuska Sen' },
//     { src: '../assets/photos/Anushka_Sen (2).jpg', alt: 'Anuska Sen', desc: 'Anuska Sen' },
//     { src: '../assets/photos/Anushka_Sen (3).jpg', alt: 'Anuska Sen', desc: 'Anuska Sen' },
//     { src: '../assets/photos/Arijit_Roy (1).jpg', alt: 'Arijit Roy', desc: 'Arijit Roy' },
//     { src: '../assets/photos/Arijit_Roy (2).jpg', alt: 'Arijit Roy', desc: 'Arijit Roy' },
//     { src: '../assets/photos/Arijit_Roy (3).jpg', alt: 'Arijit Roy', desc: 'Arijit Roy' },
//     { src: '../assets/photos/Arpita_kundu (1).jpg', alt: 'Arpita Kundu', desc: 'Arpita Kundu' },
//     { src: '../assets/photos/Arpita_Kundu (2).jpg', alt: 'Arpita Kundu', desc: 'Arpita Kundu' },
//     { src: '../assets/photos/Arpita_Kundu (3).jpg', alt: 'Arpita Kundu', desc: 'Arpita Kundu' },
//     { src: '../assets/photos/Arpita_Kundu (4).jpg', alt: 'Arpita Kundu', desc: 'Arpita Kundu' },
//     { src: '../assets/photos/Debjit (1).jpeg', alt: 'Debjit Ghosh', desc: 'Debjit Ghosh' },
//     { src: '../assets/photos/Debjit (2).jpeg', alt: 'Debjit Ghosh', desc: 'Debjit Ghosh' },
//     { src: '../assets/photos/Dev_Das (1).jpg', alt: 'Devdas Roy', desc: 'Devdas Roy' },
//     { src: '../assets/photos/Dev_Das (2).jpeg', alt: 'Devdas Roy', desc: 'Devdas Roy' },
//     { src: '../assets/photos/Dev_Das (2).jpg', alt: 'Devdas Roy', desc: 'Devdas Roy' },
//     { src: '../assets/photos/Dev_Das (3).jpg', alt: 'Devdas Roy', desc: 'Devdas Roy' },
//     { src: '../assets/photos/Dev_Das (4).jpg', alt: 'Devdas Roy', desc: 'Devdas Roy' },
//     { src: '../assets/photos/Dev_Das (5).jpg', alt: 'Devdas Roy', desc: 'Devdas Roy' },
//     { src: '../assets/photos/Dev_Das (6).jpg', alt: 'Devdas Roy', desc: 'Devdas Roy' },
//     { src: '../assets/photos/Dev_Das (7).jpg', alt: 'Devdas Roy', desc: 'Devdas Roy' },
//     { src: '../assets/photos/Disha_Sana (1).jpg', alt: 'Disha Sana', desc: 'Disha Sana' },
//     { src: '../assets/photos/Disha_Sana (2).jpg', alt: 'Disha Sana', desc: 'Disha Sana' },
//     { src: '../assets/photos/Isha_Yadav (1).jpg', alt: 'Isha Yadav', desc: 'Isha Yadav' },
//     { src: '../assets/photos/Isha_Yadav (2).jpg', alt: 'Isha Yadav', desc: 'Isha Yadav' },
//     { src: '../assets/photos/Isha_Yadav (3).jpg', alt: 'Isha Yadav', desc: 'Isha Yadav' },
//     { src: '../assets/photos/Jayanta.jpeg', alt: 'Jayanta Karmakar', desc: 'Jayanta Karmakar' },
//     { src: '../assets/photos/jayanta_banti.jpg', alt: 'Jayanta Karmakar', desc: 'Jayanta Karmakar' },
//     { src: '../assets/photos/JayantaKarmakar.jpg', alt: 'Jayanta Karmakar', desc: 'Jayanta Karmakar' },
//     { src: '../assets/photos/Moumita.jpg', alt: 'Moumita Singha', desc: 'Moumita Singha' },
//     { src: '../assets/photos/Nishant_Gond (1).jpg', alt: 'Nishant Gond', desc: 'Nishant Gond' },
//     { src: '../assets/photos/Nishant_Gond (2).jpg', alt: 'Nishant Gond', desc: 'Nishant Gond' },
//     { src: '../assets/photos/PAYEL_ADAK.jpg', alt: 'Payel Adak', desc: 'Payel Adak' },
//     { src: '../assets/photos/Riya_Goswami (1).jpg', alt: 'Riya Goswami', desc: 'Riya Goswami' },
//     { src: '../assets/photos/Riya_Goswami (2).jpg', alt: 'Riya Goswami', desc: 'Riya Goswami' },
//     { src: '../assets/photos/Riya_Goswami (5).jpg', alt: 'Riya Goswami', desc: 'Riya Goswami' },
//     { src: '../assets/photos/Riya_Goswami (6).jpg', alt: 'Riya Goswami', desc: 'Riya Goswami' },
//     { src: '../assets/photos/Sayani_Dev.jpeg', alt: 'Sayani Dev', desc: 'Sayani Dev' },
//     { src: '../assets/photos/Shreetama_Das (1).jpg', alt: 'Shreetama Das', desc: 'Shreetama Das' },
//     { src: '../assets/photos/Shreetama_Das (2).jpg', alt: 'Shreetama Das', desc: 'Shreetama Das' },
//     { src: '../assets/photos/Shreetama_Das (3).jpg', alt: 'Shreetama Das', desc: 'Shreetama Das' },
//     { src: '../assets/photos/Shreetama_Das (4).jpg', alt: 'Shreetama Das', desc: 'Shreetama Das' },
//     { src: '../assets/photos/Sourav_Saha (1).jpg', alt: 'Sourav Saha', desc: 'Sourav Saha' },
//     { src: '../assets/photos/Sourav_Saha (2).jpg', alt: 'Sourav Saha', desc: 'Sourav Saha' },
//     { src: '../assets/photos/Suchana_majumdar (1).jpeg', alt: 'Suchana Majumdar', desc: 'Suchana Majumdar' },
//     { src: '../assets/photos/Suchana_majumdar (1).jpg', alt: 'Suchana Majumdar', desc: 'Suchana Majumdar' },
//     { src: '../assets/photos/Suchana_majumdar (2).jpeg', alt: 'Suchana Majumdar', desc: 'Suchana Majumdar' },
//     { src: '../assets/photos/SUSMITA_HAZRA.jpeg', alt: 'Susmita Hazra', desc: 'Susmita Hazra' },
//     { src: '../assets/photos/Suvendu_Dinda (1).jpeg', alt: 'Suvendu Dinda', desc: 'Suvendu Dinda' }
//   ];
