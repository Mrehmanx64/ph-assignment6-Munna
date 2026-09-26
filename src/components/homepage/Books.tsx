"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { IBook } from "@/types/bookstype";
import BookCard from "../shared/BookCard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Books = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [sortBy, setSortBy] = useState<string>("duration");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch books:", err);
        setLoading(false);
      });
  }, []);

  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  if (loading) {
    return <div className="container mx-auto text-center mt-10 text-white">Loading workouts...</div>;
  }

  return (
    <div className="container mx-auto" id="library">
      <div className="my-7 flex justify-between items-center">
        <div>
          <h2 className="text-[30px] font-bold uppercase">The Library</h2>
          <p className={`${inter.className} text-[14px] text-[#9CA3AF]`}>
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#13161D] border border-[#232732] text-white rounded-lg p-2"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedBooks.map((book: IBook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Books;
