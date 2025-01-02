import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Blog = () => {
  useEffect(() => {
    document.title = "Raigon High School - Blog";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">School Blog</h1>
        <div className="grid gap-8">
          <article className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Blog Post"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                The Importance of Extra-Curricular Activities
              </h2>
              <p className="text-gray-600 mb-4">
                Discover how participating in extra-curricular activities can enhance your
                educational experience and personal growth.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Posted by Admin</span>
                <span>January 1, 2024</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;