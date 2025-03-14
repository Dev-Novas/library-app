// export default Books;
import React, { useEffect, useState } from "react";
import { Trash2, Edit, X, Check, Search, ChevronDown, Eye } from "lucide-react";
import PagesLayout from "../layouts/PagesLayout";
import axios from "axios";
import BookCard from "../components/BookCard";



// Main Books component (renamed from LibraryBookList)
const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle book deletion
  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Handle book editing
  const handleEdit = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  //Define function to fetch books
  const getBooks = async () => {
    const response = await axios.get('https://library-api-0zbq.onrender.com/api/v1/books');
    console.table(response.data);
    setBooks(response.data.books)
  }

  useEffect(() => {
    getBooks();
  }, []);

  // Filter books based on search query and filter type
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  return (
    <PagesLayout>
      <div className="max-w-7xl mx-auto p-4 m-0 w-full bg-[#F7FCFC] font-play-au">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#173F5F]">
          Library Book Collection
        </h1>

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


        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredBooks.map((book) => (
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
            <p className="text-gray-500 text-lg">
              No books found matching your search.
            </p>
          </div>
        )}
      </div>
    </PagesLayout>
  );
};

export default Books;
