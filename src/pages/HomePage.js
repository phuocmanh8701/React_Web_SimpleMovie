import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import Banner from "../components/banner/Banner";

const HomePage = () => {
  return (
      <Fragment>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize mb-10 text-3xl text-white font-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize mb-10 text-3xl text-white font-bold">
          Top Rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize mb-10 text-3xl text-white font-bold">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
