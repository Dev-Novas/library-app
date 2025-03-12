import React from "react";
import PagesLayout from "../layouts/PagesLayout";
import BookCard from "../components/BookCard";

const Books = () => {
  return (
    <PagesLayout>
      <div className="bg-[#173F5F]">
          <div className="flex justify-center p-8 text-3xl text-black font-bold">
            <h1>Trending Reads</h1>
          </div>

          <div className="bg-[#173F5F] pt-5 pb-5">
            <div className="grid grid-cols-4 auto-rows-auto gap-8 w-[90%] mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
                return (
                  <BookCard key={i} />
                );
              })}
            </div>
          </div>

          <footer />
        </div>



      
    </PagesLayout>
  );
};

export default Books;
