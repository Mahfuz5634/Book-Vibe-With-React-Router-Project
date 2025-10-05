import React from "react";
import { MapPin, BookOpen, User, Calendar } from "lucide-react";

const BookCard = ({ book }) => {
    console.log(book);
  return (
    <div className="flex flex-col md:flex-row gap-5 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      {/* Book Image */}
      <div className="flex justify-center items-center md:w-1/4">
        <img
          src={book.image}
          alt={book.title}
          className="w-32 h-44 object-cover rounded-md shadow-sm"
        />
      </div>

      {/* Book Info */}
      <div className="flex flex-col justify-between w-full">
        {/* Title and Author */}
        <div>
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-sm text-gray-500">
            By : <span className="font-medium">{book.author}</span>
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600 items-center">
          <div className="flex items-center gap-1">
            <Calendar size={16} /> Year of Publishing: {book.yearOfPublishing}
          </div>
          <div className="flex items-center gap-1">
            <User size={16} /> Publisher: {book.publisher}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={16} /> Page: {book.totalPages}
          </div>
        </div>

        {/* Category, Rating & Button */}
        <div className="flex flex-wrap items-center justify-between mt-4">
          <div className="flex gap-3">
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              Category: {book.category}
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700">
              Rating: {book.rating}
            </span>
          </div>

          <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
