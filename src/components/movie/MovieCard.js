import React from "react";

const MovieCard = (name) => {
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        src="https://upload.wikimedia.org/wikipedia/vi/7/71/%C3%81p_ph%C3%ADch_phim_Ng%C6%B0%E1%BB%9Di_Nh%E1%BB%87n_kh%C3%B4ng_c%C3%B2n_nh%C3%A0.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="capitalize text-xl font-bold mb-3">Now playing</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium w-full">
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
