'use client';
import'./globalstyles.module.css';
import React, { useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import slides from './blogcontent/slides';
import Navbar from './components/navbar';
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
    <div className="text-center mt-20">
    <h2 className="text-9xl font-bold mb-2 text-white italic">TURN ON</h2>
    <div className="flex justify-center">
    <video preload="auto" 
       playsInline 
       autoPlay 
       loop 
       muted
       poster="https://www.expedrion.biz/uploads/tv/images/yellow-tv.jpg" 
       src="https://www.expedrion.biz/uploads/tv/videos/dot-tv main.mp4"
       className="w-42 h-32 object-cover rounded"></video>
          </div>
    <h2 className="text-9xl font-bold mb-2 text-white italic">YOUR DOMAIN</h2>
    <FontAwesomeIcon icon={faArrowDown} size="sm" className="text-white" />
        <p className="text-2xl font-bold text-white mt-4 italic">Whether launching a new film or music video, or streaming your day-to-</p>
        <p className="text-2xl font-bold text-white italic">day content. TV is the domain you want for everything watchable. Get</p>
        <p className="text-2xl font-bold text-white italic">your .TV domain and share your content in the world.</p>
        <div className="relative mt-8">
        <input type="text" placeholder="Find your .TV domain" 
                 className="w-full py-3 px-4 border-none outline-none bg-transparent text-white rounded-l-md pl-10" 
                 style={{ backgroundColor: '#0005ff', height: '90px', color: '#5cfffa', WebkitTextFillColor: 'white', fontSize: '40px' ,fontStyle: 'italic', fontWeight: 'bold'}}/>
          <button type="submit" className="absolute right-0 top-0 bottom-0 py-2 px-4 bg-transparent text-white rounded-r-md" style={{ backgroundColor: '#5cfffa', color: '#ffffff' }}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
    </div>
    <div className="mt-32 flex justify-center items-center space-x-20 mx-auto max-w-screen-sm">
        {/* First Div */}
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <span className="block mb-2 text-3xl font-bold text-red-600">01</span>
          <h2 className="mb-2 text-6xl font-bold text-red-600">SEARCH</h2>
          <p className="mb-4 text-xl font-semibold text-gray-300">Search for your preferred .TV domain name and check availability.</p>
        </div>
        {/* Second Div */}
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <span className="block mb-2 text-3xl font-bold text-green-500">02</span>
          <h2 className="mb-2 text-6xl font-bold text-green-500">SELECT</h2>
          <p className="mb-4 text-xl font-semibold text-gray-300">Choose a trusted retailer. We've partnered with the best worldwide!</p>
        </div>
        {/* Third Div */}
        <div className="bg-black p-5 rounded-lg shadow-lg">
          <span className="block mb-2 text-3xl font-bold text-blue-400">03</span>
          <h2 className="mb-2 text-6xl font-bold text-blue-400">CHECKOUT</h2>
          <p className="mb-4 text-xl font-semibold text-gray-300">Complete the purchase with your selected retail partner.</p>
        </div>
      </div>
      <div className="text-center mt-10 px-28">
        <h1 className="text-9xl font-bold italic text-blue-400">Why .TV?</h1>
        <p className="text-2xl font-bold italic text-white mt-4">We live in a multi-screen world where content is being created and consumed every second of every day. The .TV domain is perfect for sharing your creativity with the world — whether you’re a Blogger, a YouTuber, a Twitch Streamer, an Instagram Influencer, or a TikTok Star.</p>
      </div>
        {/* 2  */}
        <div className="mt-10 flex flex-col justify-center space-y-10">
  {/* <!-- First Div --> */}
  <div className="bg-black p-6 rounded-lg shadow-lg relative">
    <div className="absolute inset-y-0 left-0 w-1 bg-[#F5FF03]"></div>
    <div className="pl-4 flex items-center justify-between">
      <h2 className="font-bold italic text-red-600 text-5xl">It says “watch me”</h2>
      <p className="text-2xl font-semibold text-gray-300 italic break-words">
  From smartphones to tablets to<br />
  laptops and old-school television,<br />
  .TV is perfect for our multi-screen world.
</p>
      
    </div>
  </div>
  {/* <!-- Second Div --> */}
  <div className="bg-black p-6 rounded-lg shadow-lg relative">
    <div className="absolute inset-y-0 left-0 w-1 bg-[#FF00B8]"></div>
    <div className="pl-4 flex items-center justify-between">
      <h2 className="font-bold italic text-green-500 text-5xl">It’s short and spells itself</h2>
      <p className="text-2xl font-semibold text-gray-300 italic break-words">It’s confusion-free, memorable, and lets <br />everyone know it’s all about content.</p>
    </div>
  </div>
  {/* <!-- Third Div --> */}
  <div className="bg-black p-6 rounded-lg shadow-lg relative">
    <div className="absolute inset-y-0 left-0 w-1 bg-[#5CFFFA]"></div>
    <div className="pl-4 flex items-center justify-between">
      <h2 className="font-bold italic text-blue-400 text-5xl">It’s unique</h2>
      <p className="text-2xl font-semibold text-gray-300 italic break-words">If you want to stand out from the <br />crowd and get noticed, .TV is the domain <br /> for you.</p>
    </div>
  </div>
</div>
<div className="text-center mt-10 flex items-center justify-center">
  <video preload="auto" playsInline autoPlay loop muted poster="https://www.expedrion.biz/uploads/tv/images/yellow-tv.jpg" src="https://www.expedrion.biz/uploads/tv/videos/dot-tv main.mp4" className="w-96 h-64 object-cover rounded"></video>
</div>
<div className="mt-10 text-center">
<span className="text-xl font-bold text-white justify-center italic block">Who's on.TV</span>
<div className="whos-text-details flex flex-col items-center gap-10">
   {/* First Item */}
<div className="flex flex-col items-center">
<h2 className="text-5xl font-bold italic text-white mb-4">NOT EVERYONE GETS TO BE ON TV</h2>
<div className="whos-video">
<video
         preload="auto"
         style={{ maxWidth: "30%", maxHeight: "8vh", objectFit: "cover" }}
         playsInline
         autoPlay
         loop
         muted
         poster="https://www.expedrion.biz/uploads/tv/images/yellow-tv.jpg"
         src="https://www.expedrion.biz/uploads/tv/videos/p-inline-color.mp4"
></video>
</div>
</div>
   {/* Second Item */}
<div className="flex flex-col items-center">
<h2 className="text-5xl font-bold italic text-white mb-4">LETS ANYONE SHOW OFF THEIR LATEST</h2>
<div className="whos-video">
<video
         preload="auto"
         style={{ maxWidth: "30%", maxHeight: "8vh", objectFit: "cover" }}
         playsInline
         autoPlay
         loop
         muted
         poster="https://www.expedrion.biz/uploads/tv/images/yellow-tv.jpg"
         src="https://www.expedrion.biz/uploads/tv/videos/p-inline-1.mp4"
></video>
</div>
</div>
   {/* Third Item */}
<div className="flex flex-col items-center">
<h2 className="text-3xl font-bold italic text-white mb-4">Check out these creators building their</h2>
<div className="whos-video">
<video
         preload="auto"
         style={{ maxWidth: "30%", maxHeight: "8vh", objectFit: "cover" }}
         playsInline
         autoPlay
         loop
         
         poster="https://www.expedrion.biz/uploads/tv/images/yellow-tv.jpg"
         src="https://www.expedrion.biz/uploads/tv/videos/dot-TV-shift.mp4"
></video>
</div>
</div>
</div>
</div>
<div className="mt-10 flex justify-center items-center relative">
 {/* Blog Content */}
<div className="bg-black p-6 rounded-lg shadow-lg max-w-lg relative">
<img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="mb-4" />
<h2 className="text-2xl font-bold italic text-white">{slides[currentSlide].title}</h2>
<p className="text-base font-semibold text-gray-300">
     {slides[currentSlide].content}
</p>
</div>
 {/* Left Arrow */}
<div className="absolute left-0 top-1/2 transform -translate-y-1/2">
<button onClick={prevSlide} className="bg-transparent text-white rounded-full p-2">
<FontAwesomeIcon icon={faArrowLeft} size="lg" />
</button>
</div>
 {/* Right Arrow */}
<div className="absolute right-0 top-1/2 transform -translate-y-1/2">
<button onClick={nextSlide} className="bg-transparent text-white rounded-full p-2">
<FontAwesomeIcon icon={faArrowRight} size="lg" />

</button>
</div>
</div>


  </div>
       

  
  );
};
