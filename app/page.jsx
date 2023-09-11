"use client"
import { useRouter } from "next/navigation";
import {  useState } from "react";
import './globals.css'


export default function Home() {
  const [value, setValue] = useState("");
  const { push } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/display/${value}`);
  };
  return (
  <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen w-screen">
    <img
      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
      alt="main background image"
      src="https://source.unsplash.com/random"
    />

    <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center mb-5">
      <div className="space-y-8">
        <h1 className="font-primary top-0 font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
          Welcome to SpyMe
          
        </h1>
        
      </div>
    </div> 
      <div className=" absolute inset-0 top-14 min-h-screen flex items-center justify-center ">
        <div className="p-4 shadow-md  rounded-md">
          <h1 className="text-2xl font-semibold mb-4 text-center text-white">
            .
          </h1>
          <form
            className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center"
            onSubmit={handleSubmit}
          >
            <input
              className="border border-r-0 border-palette-light rounded-l-lg w-2/3
                focus:outline-none focus:ring-1 focus:ring-palette-primary"
              type="email"
              required
              placeholder="Enter email to spy.."
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="submit"
              className="py-3 px-4 bg-blue-500 hover:bg-palette-dark text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-palette-primary"
            >
              Search
            </button>
          </form>
        </div>
      </div>

    
  </div>
  )
  // return  <TopicsList />;
}
