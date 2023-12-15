import { Fragment } from "react";

import MovieList from "./components/movie/MovieList";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div
            className="absolute overlay inset-0 bg-gradient-to-t from-[rgb(0,0,0,0.5)] 
          to-[rgb(0,0,0,0.5) rounded-lg]"
          ></div>
          <img
            src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
            alt="Avenger"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-2 border border-white rounded-lg">
                Adventure
              </span>
              <span className="py-2 px-2 border border-white rounded-lg">
                Drama
              </span>
              <span className="py-2 px-2 border border-white rounded-lg">
                Action
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Watch Now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize mb-10 text-3xl text-white font-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize mb-10 text-3xl text-white font-bold">
          Rating
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize mb-10 text-3xl text-white font-bold">
          Trending
        </h2>
        <MovieList></MovieList>
      </section>
    </Fragment>
  );
}
export default App;
