import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Teachers = () => {
  useEffect(() => {
    document.title = "Raigon High School - Teachers";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Teachers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Teacher"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Jane Smith</h2>
              <p className="text-gray-600 mb-2">Mathematics</p>
              <p className="text-sm text-gray-500">
                15 years of teaching experience with a passion for making mathematics accessible
                to all students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;