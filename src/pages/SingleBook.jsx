import React from "react";
import PagesLayout from "../layouts/PagesLayout";
import Seeme from "../assets/images/seeme.png"
import Last from "../assets/images/last.png"
import Rtireland from "../assets/images/rtireland.jpg"
import Tear from "../assets/images/tear.jpg"

const SingleBook = () => {

  return (
    <PagesLayout>
      <div className="bg-white p-8  max-w-7xl  m-0 font-play-au">
        {/* Main Book Info Section */}
        <div className="flex flex-col md:flex-row items-start mb-8">
          {/* Book Image - Made Taller (50% of viewport height) */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0 h-[80%]">
            <div className="h-96 md:h-screen md:max-h-[20%]">
              <img
                src="https://images.unsplash.com/photo-1522143049013-2519756a52d4"
                alt="Birds Gonna Be Happy"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>

            {/* Book Actions */}
            <div className="mt-6 space-y-4">
              <button className="w-full px-6 py-4 bg-[#173F5F] text-white font-semibold rounded-md hover:bg-blue-50 transition text-lg">
                Read
              </button>
              <button className="w-full px-6 py-4 border border-blue-600 rounded-md text-blue-600 font-semibold hover:bg-blue-50 transition text-lg">
                Add to Wishlist
              </button>
            </div>
          </div>

          {/* Book Details */}
          <div className="w-full md:w-3/5 md:pl-10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blue-600 font-medium text-lg">Featured Book of the Week</p>
                <h1 className="text-4xl font-bold text-gray-800 mt-2">Birds Gonna Be Happy</h1>
                <p className="text-gray-600 mt-2 text-lg">By <span className="font-medium">Jane Audubon</span></p>
              </div>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-base font-medium">In Stock</span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center my-4">
              <div className="flex text-yellow-400 text-xl mr-2">
                ⭐⭐⭐⭐☆
              </div>
              <span className="text-gray-600 text-base">(4.2 • 128 ratings)</span>
            </div>

            {/* Price */}
            <div className="mt-3">
              <span className="text-3xl font-bold text-gray-900">$24.99</span>
              <span className="ml-3 text-base line-through text-gray-500">$29.99</span>
              <span className="ml-3 text-base text-green-600">Save 17%</span>
            </div>

            {/* Summary */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Summary</h3>
              <p className="text-gray-600 mt-3 text-lg leading-relaxed">
                A captivating journey into the world of birds and their habitats. This beautifully illustrated guide explores how various bird species find happiness in their natural environments. Jump-start your book reading by quickly checking through the popular book categories. 1000+ books are published by different authors every day.
              </p>
            </div>

            {/* Book Details Table */}
            <div className="mt-8 grid grid-cols-2 gap-6 text-base">
              <div>
                <p className="text-gray-500">Publisher</p>
                <p className="font-medium">TreeBooks Publishing</p>
              </div>
              <div>
                <p className="text-gray-500">Publication Date</p>
                <p className="font-medium">March 2, 2025</p>
              </div>
              <div>
                <p className="text-gray-500">Pages</p>
                <p className="font-medium">342</p>
              </div>
              <div>
                <p className="text-gray-500">Language</p>
                <p className="font-medium">English</p>
              </div>
              <div>
                <p className="text-gray-500">ISBN</p>
                <p className="font-medium">978-1234567890</p>
              </div>
              <div>
                <p className="text-gray-500">Category</p>
                <p className="font-medium">Nature & Wildlife</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section - Reduced to 2 reviews */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
            <button className="px-5 py-3 border rounded-md text-blue-600 font-semibold hover:bg-blue-50 transition">
              Write a Review
            </button>
          </div>

          {/* Just 2 Individual Reviews */}
          <div className="space-y-10 flex flex-row justify-around">
            {/* Review 1 */}
            <div className="border-r pb-8">
              <div className="flex items-start">
                <div className="mr-5">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    MR
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-800 text-lg">Michael Robinson</h4>
                    <span className="text-gray-500 text-base">February 28, 2025</span>
                  </div>
                  <div className="flex text-yellow-400 text-lg my-2">⭐⭐⭐⭐⭐</div>
                  <h5 className="font-medium text-gray-700 text-lg">A must-have for bird enthusiasts!</h5>
                  <p className="mt-3 text-gray-600 text-base">
                    This book completely changed how I view birds in my backyard. The photography is stunning, and the author's insights about bird behavior are fascinating. I've already recommended it to everyone in my birdwatching club.
                  </p>
                  <div className="mt-4 flex items-center">
                    <button className="text-gray-500 text-base flex items-center mr-6">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                      </svg>
                      Helpful (24)
                    </button>
                    <button className="text-gray-500 text-base">Report</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="pb-8">
              <div className="flex items-start">
                <div className="mr-5">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                    SL
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-800 text-lg">Sara Lin</h4>
                    <span className="text-gray-500 text-base">March 4, 2025</span>
                  </div>
                  <div className="flex text-yellow-400 text-lg my-2">⭐⭐⭐⭐☆</div>
                  <h5 className="font-medium text-gray-700 text-lg">Beautiful but could use more depth</h5>
                  <p className="mt-3 text-gray-600 text-base">
                    The illustrations in this book are absolutely gorgeous, and I learned quite a bit about various bird species. My only criticism is that I wish the author had gone into more detail about conservation efforts and how we can help protect these beautiful creatures. Still, it's a wonderful addition to my collection.
                  </p>
                  <div className="mt-4 flex items-center">
                    <button className="text-gray-500 text-base flex items-center mr-6">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                      </svg>
                      Helpful (17)
                    </button>
                    <button className="text-gray-500 text-base">Report</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* See More Reviews Button */}
          <div className="mt-8 text-center">
            <button className="px-8 py-3 border rounded-md text-blue-600 font-semibold hover:bg-blue-50 transition text-lg">
              See All 128 Reviews
            </button>
          </div>
        </div>

        {/* Related Books Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Related Book 1 */}
            <div className="border rounded-lg p-5 hover:shadow-md transition">
              <img
                src={Seeme}
                alt="Book cover"
                className="w-full h-56 object-cover rounded-md"
              />
              <h3 className="mt-4 font-medium text-gray-800 text-lg">The Secret Lives of Garden Birds</h3>
              <p className="text-base text-gray-600">Emily Parker</p>
              <div className="flex text-yellow-400 text-base mt-2">⭐⭐⭐⭐⭐</div>
              <p className="mt-2 font-medium text-gray-900 text-lg">$19.99</p>
            </div>

            {/* Related Book 2 */}
            <div className="border rounded-lg p-5 hover:shadow-md transition">
              <img
                src={Last}
                alt="Book cover"
                className="w-full h-56 object-cover rounded-md"
              />
              <h3 className="mt-4 font-medium text-gray-800 text-lg">The Last Light Of Us</h3>
              <p className="text-base text-gray-600">Robert Wilson</p>
              <div className="flex text-yellow-400 text-base mt-2">⭐⭐⭐⭐☆</div>
              <p className="mt-2 font-medium text-gray-900 text-lg">Free</p>
            </div>

            {/* Related Book 3 */}
            <div className="border rounded-lg p-5 hover:shadow-md transition">
              <img
                src={Rtireland}
                alt="Book cover"
                className="w-full h-56 object-cover rounded-md"
              />
              <h3 className="mt-4 font-medium text-gray-800 text-lg">Road To Ireland</h3>
              <p className="text-base text-gray-600">Maria Johnson</p>
              <div className="flex text-yellow-400 text-base mt-2">⭐⭐⭐⭐☆</div>
              <p className="mt-2 font-medium text-gray-900 text-lg">$15.99</p>
            </div>

            {/* Related Book 4 */}
            <div className="border rounded-lg p-5 hover:shadow-md transition">
              <img
                src={Tear}
                alt="Book cover"
                className="w-full h-56 object-cover rounded-md"
              />
              <h3 className="mt-4 font-medium text-gray-800 text-lg">A Tear's Journey</h3>
              <p className="text-base text-gray-600">David Zhang</p>
              <div className="flex text-yellow-400 text-base mt-2">⭐⭐⭐⭐⭐</div>
              <p className="mt-2 font-medium text-gray-900 text-lg">$22.99</p>
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default SingleBook;