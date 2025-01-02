import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Gallery = () => {
  useEffect(() => {
    document.title = "Raigon High School - Gallery";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Photo Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
              alt="School Event"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <p className="text-center p-4">Annual Sports Day 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;