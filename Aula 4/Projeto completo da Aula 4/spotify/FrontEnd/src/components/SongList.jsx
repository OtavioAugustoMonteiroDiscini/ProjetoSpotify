import React, { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .slice(0, items) // Usando slice ao invés de filter
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      {items < songsArray.length && ( // Só renderiza se ainda houver mais músicas
        <p
          className="song-list__see-more"
          onClick={() => setItems(items + 5)}
        >
          Ver mais
        </p>
      )}
    </div>
  );
};

export default SongList;
