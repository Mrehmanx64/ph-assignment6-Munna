import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-[#9CA3AF] mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="bg-[#C2F800] text-black font-bold px-6 py-3 rounded-lg">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;