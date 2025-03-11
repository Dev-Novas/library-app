import React from 'react'

const BookCard = ({ title, author, rating, image, status }) => {
    return (
        <div className="bg-red-500 rounded-xl shadow-2xl h-[300px] w-[250px] p-4 flex flex-col justify-between">

            {/* Book Image */}
            <div className="h-[60%] flex justify-center items-center">
                <img
                    src={image || "https://via.placeholder.com/150"}
                    alt={title}
                    className="h-full object-cover rounded-md"
                />
            </div>

            {/* Book Details */}
            <div className="mt-4 border-t border-gray-300 pt-2">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-600">By: {author}</p>
                <p className="text-sm text-yellow-500">⭐ {rating} / 5</p>
                <p className={`text-sm font-semibold ${status === "Available" ? "text-green-600" : "text-red-500"}`}>
                    {status}
                </p>
            </div>

            {/* Read More Button */}
            <a
                href="#"
                className="mt-3 bg-gradient-to-r from-[#956d88] to-blue-950 text-white px-4 py-2 rounded-lg text-center font-extrabold hover:from-blue-600 hover:to-purple-600 transition"
            >
                Read More
            </a>

        </div>
    );
};

export default BookCard;
