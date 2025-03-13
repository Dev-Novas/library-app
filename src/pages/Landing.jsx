import React from "react";
import Button from "../components/Button";
import PagesLayout from "../layouts/PagesLayout";
import hero from "../assets/photos/hero-bg1.png";
import featuredbook from "../assets/photos/featuredbook1.png";
import article1 from "../assets/photos/article1.png";
import ActiveSlider from "../components/ActiveSlider";

const Landing = () => {
  return (
    <PagesLayout>
      <div className="font-play-au">
        <section className="flex flex-col md:flex-row justify-center items-center h-auto md:h-[100vh] w-full font-play-au">
          <div className="flex flex-col justify-center gap-y-5 bg-gradient-to-r from-pink-100 via-blue-100 to-white p-5 w-full md:w-1/2 h-auto md:h-full text-[#173F5F]">
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold">
              Discover & Manage Your Favorite Books 📚
            </h1>
            <p className="text-lg md:text-xl font-bold">
              Explore an extensive collection of books, manage your library with
              ease, and keep track of your reading journey—all in one place.
            </p>
            <button className="flex flex-row justify-items-start rounded-lg p-2 bg-white border-[#173F5F] border-2 w-fit text-[#173F5F] text-lg font-bold transition-all duration-300 hover:bg-[#173F5F] hover:text-white">
              Get Started
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={hero}
              alt=""
              className="w-full max-w-[500px] md:max-w-none"
            />
          </div>
        </section>

        <ActiveSlider />
        <section className="flex flex-col-reverse md:flex-row justify-evenly items-center h-auto md:h-[100vh] w-full bg-[#FBEEEE] p-5">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={featuredbook}
              alt=""
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="flex flex-col justify-start gap-y-5 w-full md:w-1/2 p-2">
            <h1 className="text-3xl md:text-4xl font-medium">Featured book</h1>
            <div className="text-left">
              <p>By Timbur Hood</p>
              <div className="w-[18%] h-[2px] bg-red-500 mt-1"></div>
            </div>
            <h3 className="text-2xl font-medium">Birds gonna be happy</h3>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac.
            </p>
            <p className="text-lg text-red-500 font-bold">$ 45.00</p>
            <button className="rounded-lg p-2 bg-white border-[#173F5F] border-2 w-fit text-[#173F5F] transition-all duration-300 hover:bg-[#173F5F] hover:text-white">
              VIEW MORE
            </button>
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-center items-center h-auto md:h-[40vh] w-full bg-[#F7FCFC] p-5">
          <div className="w-full md:w-1/2 flex items-center justify-center text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#173F5F]">
              Subscribe to <br className="hidden md:block" /> our newsletter
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center h-full">
            <p className="text-center max-w-md text-lg text-gray-700">
              Join our community of book lovers! 📚 Stay updated with the latest
              arrivals, personalized recommendations, and exclusive literary
              insights—right in your inbox.
            </p>
            <div className="relative w-full max-w-md mt-4">
              <input
                type="text"
                placeholder="Enter Your Email Address Here"
                className="w-full border-b border-gray-400 py-2 pr-14 text-gray-700 text-sm focus:outline-none"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-x-1 text-red-500 text-sm">
                SEND <span>📩</span>
              </button>
            </div>
          </div>
        </section>

        <section className="h-auto md:h-[100vh] flex flex-col p-5">
          <div className="flex flex-col justify-center items-center text-[#173F5F] mb-5">
            <p>READ OUR ARTICLES</p>
            <h2 className="text-2xl md:text-3xl font-medium">
              Latest Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="p-4">
                <img
                  src={article1}
                  alt=""
                  className="w-full h-auto rounded-md"
                />
                <div className="flex flex-col gap-y-2 p-2 text-[#173F5F]">
                  <p className="text-gray-600 text-sm">2 Aug, 2021</p>
                  <p className="text-lg md:text-xl font-medium">
                    Reading books always makes the moments happy
                  </p>
                </div>
                <div className="w-full h-[2px] bg-gray-500 mt-1"></div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center p-2">
            <button className="rounded-lg p-2 bg-white border-[#173F5F] border-2 w-fit text-[#173F5F] font-bold transition-all duration-300 hover:bg-[#173F5F] hover:text-white">
              READ ALL ARTICLES
            </button>
          </div>
        </section>
      </div>
    </PagesLayout>
  );
};

export default Landing;
