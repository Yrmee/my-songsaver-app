/* import React, { useContext } from "react";

import {SongContext} from '../../SongContext';


function SongSort() {

    const [_, setSongs] = useContext(SongContext);

    const handleSorting = (event) => {
        event.preventDefault();
    
        setSongs((prevSongs) => {
          const newSongs = [...prevSongs.songs];
          switch (event.target.value) {
    
            case "title":
              const sortedSongsA = newSongs.sort((a, b) =>
                a.title > b.title ? 1 : -1
              );
              const newStateSongsA = { songs: sortedSongsA };
              return newStateSongsA;
    
            case "artist":
              const sortedSongsB = newSongs.sort((a, b) =>
                a.artist > b.artist ? 1 : -1
              );
              const newStateSongsB = { songs: sortedSongsB };
              return newStateSongsB;
            
            case "genre":
              const sortedSongsC = newSongs.sort((a, b) =>
                a.genre > b.genre ? 1 : -1
              );
              const newStateSongsC = { songs: sortedSongsC };
              return newStateSongsC;
            
            case "rating":
              const sortedSongsD = newSongs.sort((a, b) =>
                a.rating > b.rating ? 1 : -1
              );
              const newStateSongsD = { songs: sortedSongsD };
              return newStateSongsD;
            
            default:
              return prevSongs;
          }
        });
      }

  return (
    <div>
      <select name="sort" id="sort" onChange={handleSorting}>
        <option value="">-- Sort songs on: --</option>
        <option value="title">Title</option>
        <option value="artist">Artist</option>
        <option value="genre">Genre</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default SongSort;
*/