import React from "react";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import { apiKey, fetcher, tmdbApi } from "../../config";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
const Banner = ({ type = "upcoming" }) => {
  const { data, error, isLoading } = useSWR(
    tmdbApi.getMovieList(type),
    fetcher
  );
  console.log(data);

  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden select-none">
      <Swiper>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItem({ item }) {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div
        className="absolute overlay inset-0 bg-gradient-to-t from-[rgb(0,0,0,0.5)] 
to-[rgb(0,0,0,0.5) rounded-lg]"
      ></div>
      <img
        src={`${tmdbApi.imageOriginal(poster_path)}`}
        alt="Avenger"
        className="w-full h-full object-cover rounded-lg object-top"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
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
        {/* py-3 px-6 rounded-lg bg-primary text-white font-medium */}
        <Button
          onClick={() => navigate(`/movie/${id}`)}
          bgColor="primary"
          full
        >
          Watch Now
        </Button>
      </div>
    </div>
  );
}
export default Banner;
