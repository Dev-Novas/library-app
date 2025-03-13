

// export default Books;
import React, { useState } from 'react';
import { Trash2, Edit, X, Check, Search, ChevronDown } from 'lucide-react';
import PagesLayout from '../layouts/PagesLayout';

// BookCard component (now internal to Books.jsx)
const BookCard = ({ book, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState({ ...book });

  // Handle input change for editing
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedBook({
      ...editedBook,
      [name]: type === 'checkbox' ? checked : value
    });
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
          <span key={i} className={`text-sm ${i < fullStars ? 'text-yellow-400' : (i === fullStars && hasHalfStar ? 'text-yellow-300' : 'text-gray-300')}`}>★</span>
        ))}
        <span className="ml-1 text-xs text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white h-full flex flex-col font-play-au">
      {isEditing ? (
        // Edit mode
        <div className="p-4 flex-grow">
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1 ">Title</label>
            <input
              type="text"
              name="title"
              value={editedBook.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1 font-play-au">Author</label>
            <input
              type="text"
              name="author"
              value={editedBook.author}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <input
              type="number"
              name="year"
              value={editedBook.year}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
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
              src={book.coverImg}
              alt={`${book.title} cover`}
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-2 right-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded ${book.isAvailable ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {book.isAvailable ? 'Available' : 'Checked Out'}
              </span>
            </div>
          </div>

          <div className="p-3 flex-grow flex flex-col">
            <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">{book.title}</h2>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Main Books component (renamed from LibraryBookList)
const Books = () => {
  // Sample initial book data
  const initialBooks = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction', rating: 4.8, isAvailable: true, coverImg: '/api/placeholder/150/200' },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949, genre: 'Science Fiction', rating: 4.7, isAvailable: true, coverImg: '/api/placeholder/150/200' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'Fiction', rating: 4.5, isAvailable: false, coverImg: '/api/placeholder/150/200' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Romance', rating: 4.6, isAvailable: true, coverImg: '/api/placeholder/150/200' },
    { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, genre: 'Fantasy', rating: 4.9, isAvailable: true, coverImg: '/api/placeholder/150/200' },
    { id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genre: 'Fiction', rating: 4.3, isAvailable: false, coverImg: '/api/placeholder/150/200' },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');

  // Filter types
  const filterOptions = ['All', 'Available', 'Checked Out'];

  // Handle book deletion
  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Handle book editing
  const handleEdit = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };

  // Filter books based on search query and filter type
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterType === 'All') return matchesSearch;
    if (filterType === 'Available') return matchesSearch && book.isAvailable;
    if (filterType === 'Checked Out') return matchesSearch && !book.isAvailable;

    return matchesSearch;
  });

  return (
   <PagesLayout>
     <div className="max-w-7xl mx-auto p-4 bg-[#FBEEEE] font-play-au">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#173F5F]">Library Book Collection</h1>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search by title or author..."
            className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="relative w-full md:w-48">
          <select
            className="w-full p-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            {filterOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            book={book}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No books found matching your search.</p>
        </div>
      )}
    </div>
   </PagesLayout>
  );
};

export default Books;