import React, { useContext } from "react";
import { GlobalContext } from "../Context/MainContext";

const Card = ({ item }) => {
  const image_url = `https://image.tmdb.org/t/p/w500`;
  const data =useContext(GlobalContext)
//   const {watchList, watched}=state
  const addToMovieList=(movie)=>{
    data.dispatch({type:"ADD_MOVIE_TO_WATCHLIST",payload:movie})
  }
  const addToWacthed=(movie)=>{
    data.dispatch({type:"ADD_MOVIE_TO_WATCHED",payload:movie})
  }
  console.log(data.state.watchList)
  console.log(data.state.watched)
  return (
    <>
      {item.map((movie, index) => {
        return (
          <div className="flex justify-center mt-2" key={index}>
            <div className="flex flex-col md:flex-row max-w-xl  rounded-lg  shadow-lg  bg-slate-200 w-[350px] md:w-[500px]">
              <img
                className="mx-auto h-[150px]  object-fit w-72 rounded-t-lg rounded-none rounded-l-lg md:h-[250px] my-auto"
                src={`${image_url + movie?.poster_path}`}
                alt=""
              />
              <div className="p-3 flex flex-col justify-start my-auto w-full">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {movie.title}
                </h5>
                <p className="text-gray-600 text-xs">{movie.original_title}</p>
                <div className="flex mt-4 bg-slate-300 rounded-md p-4  gap-4 w-full">
                <button className="bg-slate-400 rounded-sm text-slate-900 font-bold px-4 py-1 " onClick={()=>addToMovieList(movie)}>ADD TO WATCHLİST</button>
                <button className="bg-slate-400 rounded-sm text-slate-900 font-bold px-4 py-1" onClick={()=>addToWacthed(movie)}>ADD TO WATCHED</button>
              </div>
              </div>
              
            </div>
           
          </div>
        );
      })}
    </>
  );
};

export default Card;
