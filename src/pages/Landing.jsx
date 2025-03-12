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
        <section className="flex flex-row justify-center items-center h-[100vh] w-[100%] font-play-au ">
          <div className=" flex flex-col justify-center gap-y-5 bg-gradient-to-r from-pink-100 via-blue-100 to-white p-5 w-[50%] h-[100%] text-[#173F5F]">
            <h1 className="text-[52px] font-[700]">
              Discover & Manage Your Favorite Books 📚
            </h1>
            <p className="text-[18px] font-bold">
              Explore an extensive collection of books, manage your library with
              ease, and keep track of your reading journey—all in one place.
            </p>
            <button className="flex flex-row justify-items-start rounded-lg p-2 bg-white border-[#173F5F] border-2 w-fit text-[#173F5F] text=[16px] font-bold transition-all duration-300 hover:bg-[#173F5F] hover:text-white">
              {" "}
              Get Started
            </button>
          </div>
          <div className="w-[50%]">
            <img src={hero} alt="" />
          </div>
        </section>
        <ActiveSlider />
        <section>
          <div className="flex flex-row justify-evenly items-center h-[100vh] w-[100%] bg-[#FBEEEE]">
            <div className="w-[50%] flex justify-center items-center ">
              <img src={featuredbook} alt="" className="w-[350px]" />
            </div>
            <div className="flex flex-col justify-start gap-y-[20px] w-[50%] p-2">
              <h1 className="text-[3rem] font-[400]">Featured book</h1>
              <div className="text-left">
                <p>By Timbur Hood</p>
                <div className="w-[18%] h-[2px] bg-red-500 mt-1"></div>
              </div>
              <h3 className="text-[2rem] font-[400]">Birds gonna be happy</h3>
              <p className="text-[1rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </p>
              <p className="text-[1rem] text-red-500 font-bold"> $ 45.00</p>
              <button className="flex flex-row justify-items-start rounded-lg p-2 bg-white border-[#173F5F] border-2 w-fit text-[#173F5F] transition-all duration-300 hover:bg-[#173F5F] hover:text-white">
                VIEW MORE
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-row justify-center items-center h-[40vh] w-[100%] bg-[#F7FCFC]">
          <div className="w-[50%] flex items-center justify-center">
            <h2 className="text-[2rem] font-bold text-[#173F5F]">
              Subscribe to <br />
              our newsletter
            </h2>
          </div>
          <div className="w-[50%] flex flex-col items-center justify-center h-full">
            <p className="text-center max-w-[350px] text-[18px] text-gray-700">
              Join our community of book lovers! 📚 Stay updated with the latest
              arrivals, personalized recommendations, and exclusive literary
              insights—right in your inbox.
            </p>
            <div className="relative w-full max-w-[350px]">
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
        <section className="h-[100vh] flex flex-col ">
          <div className="flex flex-col justify-center items-center p-4 gap-x-[25px] text-[#173F5F]">
            <p>READ OUR ARTICLES</p>
            <h2 className="text-[2rem] font-[400]">Latest Articles</h2>
          </div>
          <div className="p-4 flex justify-evenly ">
            <div>
              <img
                src={article1}
                alt=""
                className="w-[418.88px] h-[314.03px]"
              />
              <div className="flex flex-col gap-y-[20px] p-2 text-[#173F5F]">
                <p className="text-gray-600 p-1">2 aug, 2021</p>
                <p className="text-[1.5rem]">
                  Reading books always makes the moments happy
                </p>
              </div>
              <div className="w-[420px] h-[2px] bg-gray-500 mt-1"></div>
            </div>
            <div>
              <img
                src={article1}
                alt=""
                className="w-[418.88px] h-[314.03px]"
              />
              <div className="flex flex-col gap-y-[20px] p-2 text-[#173F5F]">
                <p className="text-gray-600 p-1">2 aug, 2021</p>
                <p className="text-[1.5rem]">
                  Reading books always makes the moments happy
                </p>
              </div>
              <div className="w-[420px] h-[2px] bg-gray-500 mt-1"></div>
            </div>
            <div>
              <img
                src={article1}
                alt=""
                className="w-[418.88px] h-[314.03px]"
              />
              <div className="flex flex-col gap-y-[20px] p-2 text-[#173F5F]">
                <p className="text-gray-600 p-1">2 aug, 2021</p>
                <p className="text-[1.5rem]">
                  Reading books always makes the moments happy
                </p>
              </div>
              <div className="w-[420px] h-[2px] bg-gray-500 mt-1"></div>
            </div>
          </div>
          <div className="flex justify-center items-center p-2">
            <button className="flex justify-items-start rounded-lg p-2 bg-white border-[#173F5F] border-2 w-fit text-[#173F5F] text=[16px] font-bold transition-all duration-300 hover:bg-[#173F5F] hover:text-white">
              READ ALL ARTICLES
            </button>
          </div>
        </section>
      </div>
    </PagesLayout>
  );
};

export default Landing;
