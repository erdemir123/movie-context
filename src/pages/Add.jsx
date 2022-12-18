import React, { useState } from "react";
import MovieCard from "../components/Card";


const Add = () => {
  const [query, SetQuery] = useState("");
  const [results, SetResults] = useState([]);
 
  const handleSearch = (e) => {
    e.preventDefault();
    const api_key = `api_key=0924e6736c5942a0471ffc6954cb4ed2`;
    const base_url = `https://api.themoviedb.org/3`;
    const search_url =
      base_url + `/search/movie?` + api_key + `&query=` + query;
    fetch(search_url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("someThing Error");
        }
        return res.json();
      })
      .then((data) =>SetResults(data?.results))
      .catch((Error) => console.log(Error));
  };
  
  return (
    <>
    
    <div className="block p-6 rounded-lg shadow-lg  max-w-lg mx-auto mt-2 bg-slate-400">
      <form onSubmit={handleSearch}>
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput90"
            placeholder="Search Movie"
            value={query}
            onChange={(e) => SetQuery(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="
      w-full
      px-6
      py-2.5
      bg-slate-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-slate-700 hover:shadow-lg
      focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bgslate-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Subscribe
        </button>
      </form>
    </div>
    <div className="mt-6">
    <MovieCard item={results} />
    </div>
    
    </>
  );
};

export default Add;
