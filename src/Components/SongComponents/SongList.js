import React, { useState, useContext } from 'react';

import SongItem from './SongItem';
import {SongContext} from '../../SongContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const SongList = () => {

    const [sortings, setSortings] = useState();
    const [songs, setSongs] = useContext(SongContext);

    const deleteSong = (songId) => {
        const filteredSongs = songs.filter((song) => song.id != songId);

        setSongs(filteredSongs);
    }

    const deleteAllSongs = () => {
        setSongs([]);
    }

    const ListOfSongs = songs.map(song => (
        <SongItem
            key={song.id}
            id={song.id}
            title={song.title}
            artist={song.artist}
            genre={song.genre}
            rating={song.rating}
            deleteSong={deleteSong}
        />
    ));

    
    return (
    <div>

        <select className="inputForm">
            <option value="">-- Filter Playlist By --</option>
            <option value="title">Title</option>
            <option value="artist">Artist</option>
            <option value="genre">Genre</option>
            <option value="rating">Rating</option>
        </select> 

        <div className="playlist">

            <table className="playlist-table">

                <thead className="playlist-song--header">  
                    <tr>
                        <th className="song-row__item">Title</th>

                        <th className="song-row__item">Artist</th>

                        <th className="song-row__item">Genre</th>

                        <th className="song-row__item">Rating</th>

                    </tr>
                </thead>

                    <tbody>
                        {ListOfSongs}
                    </tbody>

            </table>

            <button className="btn-remove-list" onClick={deleteAllSongs}>
                <FontAwesomeIcon icon={faTrashAlt} />Delete Playlist
            </button>
        </div>
    </div>
    )
}

export default SongList;
