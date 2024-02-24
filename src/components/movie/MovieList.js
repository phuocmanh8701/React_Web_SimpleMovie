import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";


const MovieList = ({type = 'now_playing'}) => {
  //https://api.themoviedb.org/3/movie/now_playing?api_key=e6f0a2094c57d5470ca1ced8bfcbe126
  const { data, error,isLoading } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=e6f0a2094c57d5470ca1ced8bfcbe126`,fetcher);
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
      {movies.length >0 && movies.map(item => 
        <SwiperSlide key={item.id}>
          <MovieCard item={item}></MovieCard>
        </SwiperSlide>
      )}
      </Swiper>
    </div>
  );
};

export default MovieList;
