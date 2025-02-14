import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faCirclePause,
  faForwardStep,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Player = ({ audio }) => {
  const { id } = useParams();
  const songId = id;
  const [isShuffled, setIsShuffled] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [durationInSeconds, setDurationInSeconds] = useState(0);

  const audioPlayer = useRef(null);
  const progressBar = useRef(null);

  const playPause = () => {
    if (audioPlayer.current) {
      if (isPlaying) {
        audioPlayer.current.pause();
      } else {
        audioPlayer.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const updateTime = () => {
      if (audioPlayer.current) {
        const current = audioPlayer.current.currentTime;
        setCurrentTime(current);
        const progressPercent = (current / durationInSeconds) * 100;
        if (progressBar.current) {
          progressBar.current.style.width = `${progressPercent}%`;
        }
      }
    };

    if (audioPlayer.current) {
      audioPlayer.current.addEventListener("timeupdate", updateTime);
    }

    return () => {
      if (audioPlayer.current) {
        audioPlayer.current.removeEventListener("timeupdate", updateTime);
      }
    };
  }, [durationInSeconds]);

  useEffect(() => {
    const setAudioDuration = () => {
      if (audioPlayer.current && !isNaN(audioPlayer.current.duration)) {
        setDurationInSeconds(audioPlayer.current.duration);
      }
    };
    
    if (audioPlayer.current) {
      audioPlayer.current.addEventListener("loadedmetadata", setAudioDuration);
    }

    return () => {
      if (audioPlayer.current) {
        audioPlayer.current.removeEventListener("loadedmetadata", setAudioDuration);
      }
    };
  }, [audio]);

  useEffect(() => {
    if (audioPlayer.current) {
      setIsPlaying(false);
      audioPlayer.current.load();
    }
  }, [songId]);

  const currentSong = songsArray.find((song) => song._id === songId);
  if (!currentSong) {
    return <p>Música não encontrada.</p>;
  }

  const artistName = currentSong.artist;
  const artistSongs = songsArray
    .filter((song) => song.artist === artistName)
    .sort((a, b) => a.name.localeCompare(b.name));

  const currentIndex = artistSongs.findIndex((song) => song._id === songId);
  const getRandomSongId = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * artistSongs.length);
    } while (randomIndex === currentIndex);
    return artistSongs[randomIndex]._id;
  };

  const prevSongId =
    currentIndex > 0
      ? artistSongs[currentIndex - 1]._id
      : artistSongs[artistSongs.length - 1]._id;

  const nextSongId = isShuffled
    ? getRandomSongId()
    : currentIndex < artistSongs.length - 1
    ? artistSongs[currentIndex + 1]._id
    : artistSongs[0]._id;

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${prevSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
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
        <p>{formatTime(currentTime)}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{formatTime(durationInSeconds)}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;