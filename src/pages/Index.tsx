import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Index = () => {
  useEffect(() => {
    document.title = "Raigon High School - Home";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to Raigon High School
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Nurturing minds, building futures, and creating leaders of tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/about"
                  className="bg-secondary text-primary px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                alt="School Building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Link
              to="/notices"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Notice Board</h3>
              <p className="text-gray-600">
                Stay updated with the latest announcements and news.
              </p>
            </Link>
            <Link
              to="/results"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Student Results</h3>
              <p className="text-gray-600">
                Check your academic performance and results.
              </p>
            </Link>
            <Link
              to="/blog"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">School Blog</h3>
              <p className="text-gray-600">
                Read and engage with our school community posts.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>123 School Street</p>
              <p>City, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@raigonhigh.edu</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="hover:text-secondary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/teachers" className="hover:text-secondary">
                    Our Teachers
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-secondary">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-secondary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-secondary">
                  Facebook
                </a>
                <a href="#" className="hover:text-secondary">
                  Twitter
                </a>
                <a href="#" className="hover:text-secondary">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p>© 2024 Raigon High School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;