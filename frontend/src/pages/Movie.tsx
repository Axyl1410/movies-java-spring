import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";
import SkeletonImage from "../components/ui/Skeleton";

interface MovieProps {
  imdbId: string;
  title: string;
  releaseDate: string;
  trailerLink: string;
  genres: string[];
  poster: string;
  backdrops: string[];
  reviewIds: string[];
}

export default function Movie() {
  const [movie, setMovie] = useState<MovieProps[]>();

  const getMovie = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div className="container flex w-full flex-col justify-center gap-10 p-4 lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-3/5">
          <Link to={`/movies/${movie?.[0].imdbId}`}>
            <div className="flex flex-col gap-2">
              <SkeletonImage
                height="240px"
                src={movie?.[0].backdrops[1] || ""}
                className="aspect-video object-cover"
              />
              <p className="text-2xl font-bold">{movie?.[0].title}</p>
              <div className="flex items-center gap-2">
                {movie?.[0].genres.map((item) => <p key={item}>{item}</p>)}
              </div>
              <p
                className={`flex items-center gap-1 text-gray-500 dark:text-gray-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-gray-500 dark:fill-gray-300"
                >
                  <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                </svg>
                {movie?.[0].releaseDate}
              </p>
            </div>
          </Link>
        </div>
        <div className="h-4/5 rounded-2xl bg-gray-100 p-4 dark:bg-gray-800 lg:w-2/6">
          <div className="font-neue relative py-4 text-2xl font-bold">
            Trending Now
            <div className="absolute h-0.5 w-8 bg-sky-500"></div>
          </div>
          <AnimatePresence>
            <div className="flex flex-col gap-4 p-2">
              {movie ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {movie.slice(1, 7).map((item) => (
                    <Link
                      to={`/movies/${item.imdbId}`}
                      key={item.imdbId}
                      className="flex flex-col border-t py-2"
                    >
                      <p className="font-semibold">{item.title}</p>
                      <p
                        className={`flex items-center gap-1 text-gray-500 dark:text-gray-300`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-gray-500 dark:fill-gray-300"
                        >
                          <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                        </svg>
                        {item.releaseDate}
                      </p>
                    </Link>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full items-center justify-center"
                >
                  <div className="animate-pulse text-gray-500 dark:text-gray-300">
                    Loading...
                  </div>
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </div>
      <div className="container flex items-center justify-between p-4">
        <div className="text-2xl font-bold">You might like </div>
        <div className="text-neutral-500">See more</div>
      </div>
      {movie ? (
        <div className="container grid w-full grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
          {movie.slice(1).map((item) => (
            <Link
              to={`/movies/${item.imdbId}`}
              key={item.imdbId}
              className="flex flex-col gap-2"
            >
              <SkeletonImage
                src={item.poster}
                height="240px"
                className="aspect-square h-[240px] object-cover object-top"
              />
              <p className="text-2xl font-semibold">{item.title}</p>
              <p
                className={`flex items-center gap-1 text-gray-500 dark:text-gray-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-gray-500 dark:fill-gray-300"
                >
                  <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                </svg>
                {item.releaseDate}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="animate-pulse p-4 text-gray-500 dark:text-gray-300">
          Loading...
        </div>
      )}
    </>
  );
}
