import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";

const Player = ({ duration }) => {
  const { id } = useParams();
  const songId = Number(id);
  const [isShuffled, setIsShuffled] = useState(false);

  // Encontra a música atual
  const currentSong = songsArray.find((song) => song.id === songId);
  if (!currentSong) {
    return <p>Música não encontrada.</p>;
  }

  const artistName = currentSong.artist;

  // Filtra exatamente as 10 músicas desse artista
  const artistSongs = songsArray
    .filter((song) => song.artist === artistName)
    .sort((a, b) => a.id - b.id);

  // Encontra o índice da música atual dentro dessas 10 músicas
  const currentIndex = artistSongs.findIndex((song) => song.id === songId);

  // Função para gerar um ID aleatório dentro das músicas do artista
  const getRandomSongId = () => {
    const randomIndex = Math.floor(Math.random() * artistSongs.length);
    return artistSongs[randomIndex].id;
  };

  // Define os IDs da música anterior e próxima
  const prevSongId =
    currentIndex > 0
      ? artistSongs[currentIndex - 1].id
      : artistSongs[artistSongs.length - 1].id;
  const nextSongId = isShuffled
    ? getRandomSongId()
    : currentIndex < artistSongs.length - 1
    ? artistSongs[currentIndex + 1].id
    : artistSongs[0].id;

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${prevSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={faCirclePlay}
        />
        <Link to={`/song/${nextSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
        <button
          onClick={() => setIsShuffled(!isShuffled)}
          className={`player__icon player__shuffle-button ${
            isShuffled ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faShuffle} />
        </button>
      </div>
      <div className="player__progress">
        <p>00:00</p>
        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Player;
