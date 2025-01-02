import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Notices = () => {
  useEffect(() => {
    document.title = "Raigon High School - Notices";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Notice Board</h1>
        <div className="grid gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-sm text-gray-500 mb-2">Posted on: January 1, 2024</p>
            <h2 className="text-xl font-semibold mb-2">School Reopening Notice</h2>
            <p className="text-gray-600">
              School will reopen for the new academic year on January 15, 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;