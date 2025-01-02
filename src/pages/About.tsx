import { useEffect } from "react";
import Navbar from "../components/Navbar";

const About = () => {
  useEffect(() => {
    document.title = "Raigon High School - About";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Raigon High School</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Welcome to Raigon High School, where excellence meets opportunity. Our institution
            has been a cornerstone of education since its establishment, dedicated to nurturing
            young minds and shaping future leaders.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            To provide quality education that empowers students with knowledge, skills, and
            values necessary for lifelong success while fostering a spirit of innovation and
            social responsibility.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-6">
            To be a leading educational institution that creates well-rounded individuals
            capable of making positive contributions to society through academic excellence,
            character development, and innovative thinking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;