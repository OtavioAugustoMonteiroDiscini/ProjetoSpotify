import React from "react";
import Player from "../components/player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams(); // ✅ Correção aqui

  const songObj = songsArray.find(
    (currentSongObj) => currentSongObj._id === id
  );

  if (!songObj) {
    return <p>Música não encontrada.</p>;
  }

  const { image, name, duration, artist, audio} = songObj;

  const artistObj = artistArray.find(
    (currentArtistObj) => currentArtistObj.name === artist
  );

  if (!artistObj) {
    return <p>Artista não encontrado.</p>;
  }

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artistObj.name}`}
          />
        </Link>
        <Player duration = {duration} audio= {audio}/>
        <div>
          <p className="song__name">{name}</p>
          <Link to={`/artist/${artistObj._id}`}>{artist}</Link>
        </div>
      </div>
    </div>
  );
};

export default Song;
