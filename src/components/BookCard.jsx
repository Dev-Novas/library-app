import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Trash2, Edit, X, Check, Search, ChevronDown, Eye } from "lucide-react";

const BookCard = ({ book, onDelete, onEdit }) => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [editedBook, setEditedBook] = useState({ ...book });

    // Handle input change for editing
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditedBook({
            ...editedBook,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // Add this function inside the BookCard component
    const handleView = () => {
        // Replace this with your actual view logic
        navigate(`books/singleBook/${SingleBook.id}`);
        // Later you might want to implement actual view functionality
    };

    // Handle save edits
    const handleSaveEdit = () => {
        onEdit(editedBook);
        setIsEditing(false);
    };

    // Handle cancel edit
    const handleCancelEdit = () => {
        setEditedBook({ ...book }); // Reset to original
        setIsEditing(false);
    };

    // Calculate star rating display
    const StarRating = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`text-sm ${i < fullStars
                            ? "text-yellow-400"
                            : i === fullStars && hasHalfStar
                                ? "text-yellow-300"
                                : "text-gray-300"
                            }`}
                    >
                        ★
                    </span>
                ))}
                <span className="ml-1 text-xs text-gray-600">{rating}</span>
            </div>
        );
    };

    return (
        <div className=" rounded-lg overflow-hidden shadow-md bg-white h-full flex flex-col font-play-au">
            {isEditing ? (
                // Edit mode
                <div className="p-4 flex-grow">
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1 ">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={editedBook.title}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-play-au">
                            Author
                        </label>
                        <input
                            type="text"
                            name="author"
                            value={editedBook.author}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Year
                        </label>
                        <input
                            type="number"
                            name="year"
                            value={editedBook.year}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Genre
                        </label>
                        <input
                            type="text"
                            name="genre"
                            value={editedBook.genre}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="flex items-center text-sm font-medium text-gray-700">
                            <input
                                type="checkbox"
                                name="isAvailable"
                                checked={editedBook.isAvailable}
                                onChange={handleInputChange}
                                className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            Available
                        </label>
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            onClick={handleCancelEdit}
                            className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <X className="h-4 w-4 mr-1" />
                            Cancel
                        </button>
                        <button
                            onClick={handleSaveEdit}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                        >
                            <Check className="h-4 w-4 mr-1" />
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                // Display mode
                <>
                    <div className="relative">
                        <img
                            src={`https://savefiles.org/${book.coverImage}?shareable_link=641`}
                            alt={`${book.title} cover`}
                            className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                            <span
                                className={`text-xs font-semibold px-2 py-1 rounded ${book.isAvailable
                                    ? "bg-green-500 text-white"
                                    : "bg-[#173F5F] text-white"
                                    }`}
                            >
                                {book.isAvailable ? "Available" : "Checked Out"}
                            </span>
                        </div>
                    </div>

                    <div className="p-3 flex-grow flex flex-col">
                        <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                            {book.title}
                        </h2>
                        <p className="text-xs text-gray-600 mb-1">{book.author}</p>

                        <div className="flex justify-between items-center mb-1 mt-auto">
                            <span className="text-xs text-gray-500">{book.genre}</span>
                            <span className="text-xs text-gray-500">{book.year}</span>
                        </div>

                        <StarRating rating={book.rating} />

                        <div className="mt-2 flex justify-end space-x-1">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="p-1 text-blue-600 hover:bg-blue-50 rounded-full"
                                aria-label="Edit book"
                            >
                                <Edit className="h-4 w-4" />
                            </button>

                            <button
                                onClick={() => onDelete(book.id)}
                                className="p-1 text-red-600 hover:bg-red-50 rounded-full"
                                aria-label="Delete book"
                            >
                                <Trash2 className="h-4 w-4" />
                            </button>

                            <button
                                onClick={handleView}
                                className="p-1 text-green-600 hover:bg-green-50 rounded-full"
                                aria-label="View book details"
                            >
                                <Link to={`/SingleBook?id=${book.id}`}>
                                    <Eye className="h-4 w-4" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default BookCard