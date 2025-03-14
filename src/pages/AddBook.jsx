import React, { useState } from "react";
import PagesLayout from "../layouts/PagesLayout";
import { useNavigate } from "react-router";
import axios from "axios";

const AddBook = () => {
  const genre = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Fantasy",
    "Science Fiction",
    "Biography",
    "History",
    "Romance",
    "Thriller",
    "Horror",
  ];
  const status = ["Available", "Borrowed", "Reserved", "Lost"];
  const [buttonText, setButtonText] = useState("Add to Library");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // Prevent default submit behaviour
    event.preventDefault();
    // collect from inputs
    const formData = new FormData(event.target);
    console.log(formData);
    try {
      // submit data to backend
      const response = await axios.post(
        "https://library-api-0zbq.onrender.com/api/v1/books",
        formData
      );
      console.log(response.data);
      // Hide loading indicator
      setButtonText("Added to Library");
      // Navigate to books page
      navigate("/books");
    } catch (error) {
      alert("Failed to add book to Library");
      console.log(error) 
      setButtonText("Add Book");
    }
  };

  const [showEditForm, setShowEditForm] = useState(false);

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  return (
    <PagesLayout>
      <div className="bg-[#F7FCFC] p-4 font-play-au">
        <div className="bg-white max-w-lg mx-auto rounded-lg shadow-md p-6 ">
          <div className="flex justify-center items-center mb-4">
            <h2 className="text-xl font-extrabold text-[#173F5F]">
              Add New Book
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-3 bg-white"
          >
            {[
              {label: "Title",id: "title",type: "text",required: true, name: "title"},
              { label: "Author", id: "author", type: "text", required: true, name: "author" },
              { label: "Published Year", id: "published", type: "text", name: "publishedYear" },
              { label: "ISBN", id: "isbn", type: "text", required: true, name:"isbn" },
              { label: "Cover Image", id: "coverimage", type: "file", name:"image" },
              { label: "Publisher", id: "publisher", type: "text", name:"publisher" },
              { label: "Number Of Pages", id: "pagecount", type: "text", name:"pageCount" },
              { label: "Available Copies", id: "copies", type: "number", name:"availableCopies" },
            ].map(({ label, id, type, required,name }) => (
              <div key={id}>
                <label htmlFor={id} className="text-sm font-medium block mb-1">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  required={required}
                  name={name}
                  className="w-full bg-gray-100 border rounded-md h-8 border-gray-300 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
            ))}
            <div>
              <label htmlFor="genre" className="text-sm font-medium block mb-1">
                Genre
              </label>
              <select
                id="genre"
                name="genre"
                className="w-full bg-gray-100 border rounded-md h-10 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
                required
              >
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
                name="summary"
                className="w-full bg-gray-100 border rounded-md h-20 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#173F5F] text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
              >
                Add Book
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg mt-3">
            <p className="mr-3 text-gray-800">Want to edit a book?</p>
            <button
              onClick={toggleEditForm}
              className="bg-[#173F5F] text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
            >
              Edit Book
            </button>
          </div>
          {/* Edit book form */}
          {showEditForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto sm:rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-bold">Edit Book</h2>
                  <button
                    onClick={toggleEditForm}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>
                <form action="" className="flex flex-col space-y-4">
                  {[
                    {
                      label: "Title",
                      id: "title",
                      type: "text",
                      required: true,
                    },
                    {
                      label: "Author",
                      id: "author",
                      type: "text",
                      required: true,
                    },
                    { label: "Published Year", id: "published", type: "text" },
                    { label: "ISBN", id: "isbn", type: "text", required: true },
                    { label: "Cover Image", id: "coverimage", type: "file" },
                    { label: "Publisher", id: "publisher", type: "text" },
                    { label: "Number Of Pages", id: "pagecount", type: "text" },
                    { label: "Available Copies", id: "copies", type: "number" },
                  ].map(({ label, id, type, required }) => (
                    <div key={id} className="w-full">
                      <label
                        htmlFor={id}
                        className="text-sm font-medium block mb-1"
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required={required}
                        className="w-full bg-gray-100 border rounded-md h-10 border-gray-300 px-3 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="status"
                      className="text-sm font-medium block mb-1"
                    >
                      Availability Status
                    </label>
                    <select
                      id="genre"
                      className="w-full bg-gray-100 border rounded-md h-10 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 text-sm"
                      required
                    >
                      <option value="">Select availability status</option>
                      {status.map((status, index) => (
                        <option key={index} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="genre"
                      className="text-sm font-medium block mb-1"
                    >
                      Genre
                    </label>
                    <select
                      id="genre"
                      className="w-full bg-gray-100 border rounded-md h-10 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                      required
                    >
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
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={toggleEditForm}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#173F5F] text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </PagesLayout>
  );
};

export default AddBook;
