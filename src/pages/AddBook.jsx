import React, { useState } from "react";
import PagesLayout from "../layouts/PagesLayout";

const AddBook = () => {
  const genre =[
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Fantasy",
    "Science Fiction",
    "Biography",
    "History",
    "Romance",
    "Thriller",
    "Horror"
  ]

  const [showEditForm, setShowEditForm] = useState(false);

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };
 

 
  return (
    <PagesLayout>
      <div className="bg-white max-w-lg mx-auto rounded-lg shadow-md p-6">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-xl font-medium">Add New Book</h2>
        </div>
        <form className="flex flex-col space-y-3">
          {[
            { label: "Title", id: "title", type: "text", required: true },
            { label: "Author", id: "author", type: "text", required: true },
            { label: "Published Year", id: "published", type: "text" },
            { label: "ISBN", id: "isbn", type: "text", required: true },
            { label: "Cover Image Url", id: "coverimage", type: "text" },
            { label: "Publisher", id: "publisher", type:"text"},
            { label: "Number Of Pages", id: "pagecount", type:"text"},
            { label: "Available Copies", id: "copies", type:"number"}

          ].map(({ label, id, type, required }) => (
            <div key={id}>
              <label htmlFor={id} className="text-sm font-medium block mb-1">
                {label}
              </label>
              <input
                id={id}
                type={type}
                required={required}
                className="w-full bg-gray-100 border rounded-md h-8 border-gray-300 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
          <div>
            <label htmlFor="genre" className="text-sm font-medium block mb-1">Genre</label>
            <select id="genre" className="w-full bg-gray-100 border rounded-md h-10 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 resize-none" required>
            <option value="">Select a genre</option>
              {genre.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}

            </select>
          </div>
          <div>
            <label
              htmlFor="description"
              className="text-sm font-medium block mb-1"
            >
              Summary
            </label>
            <textarea
              id="description"
              className="w-full bg-gray-100 border rounded-md h-20 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
            >
              Add Book
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg mt-3">
          <p className="mr-3 text-gray-800">Want to edit a book?</p>
          <button onClick={toggleEditForm} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Edit Book
            </button>
        </div>
        
      

      
      </div>
    </PagesLayout>
  );
};

export default AddBook;
