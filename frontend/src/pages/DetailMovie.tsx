import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axiosConfig";
import Transition from "../components/common/Transition";

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

export default function DetailMovie() {
  const { imdbId } = useParams<{ imdbId: string }>();
  const [movie, setMovie] = useState<MovieProps>();

  const getMovie = async () => {
    try {
      const response = await api.get(`/api/v1/movies/${imdbId}`);
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (imdbId) {
      getMovie();
    }
  }, [imdbId]);

  return (
    <Transition>
      <div className="p-4">{movie ? movie.title : "Loading..."}</div>
    </Transition>
  );
}
