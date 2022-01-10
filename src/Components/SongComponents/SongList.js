import React, { useState, useContext } from 'react';

import SongItem from './SongItem';
import {SongContext} from '../../SongContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const SongList = () => {

    const [genre, setGenre] = useState("");
    const [songs, setSongs] = useContext(SongContext);


    // Filter by Genre
    const handlefilterByGenre = (e) => {
        //e.preventDefault();
        setGenre( (prevSongs) => {
            let currentGenre = e.target.value;
            const newGenre = [...prevSongs.genre];

            const filteredSongs = newGenre.filter(
                (song) => song.genre === currentGenre
            );
            const updateGenreState = {filteredSongs}

            return updateGenreState;
        })
    }

    /*
     >> Deze functie werkt wel, maar slechts 1x.

        const handlefilterByGenre = (e) => {
        e.preventDefault();
        
        let currentGenre = e.target.value;

        const updateGenreState = songs.filter((song) => 
            song.genre.includes(currentGenre));
        
        setSongs(updateGenreState)
    }
    */

    // Filter by Rating
    const handlefilterByRating = (e) => {
        //e.preventDefault();
        let currentRating = e.target.value;

        const updateRatingState = songs.filter((song) => 
            song.rating.includes(currentRating));
        
        setSongs(updateRatingState)
    }

    // Delete Single Song from Playlist
    const deleteSong = (songId) => {
        const filteredSongs = songs.filter((song) => song.id !== songId);

        setSongs(filteredSongs);
    }
    
    // Delete Playlist
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

        <div className="playlist">

            <table className="playlist-table">

                <thead className="playlist-song--header">  
                    <tr>
                        <th className="song-row__item">Title
                            <select className="inputForm"    
                            >
                                <option value="">-- Sort Title --</option>
                                <option value= "A-Z"> A-Z </option>
                                <option value= "Z-A"> Z-A </option>
                                <option value= "0-9"> 0-9 </option>
                                <option value= "9-0"> 9-0 </option>
                            </select>
                        </th>

                        <th className="song-row__item">Artist 
                            <select className="inputForm" >
                                <option value="">-- Sort Artist --</option>
                                <option value= "A-Z"> A-Z </option>
                                <option value= "Z-A"> Z-A </option>
                                <option value= "0-9"> 0-9 </option>
                                <option value= "9-0"> 9-0 </option>
                            </select>
                        </th>

                        <th className="song-row__item">Genre
                            <select className="inputForm" 
                                onChange={() => handlefilterByGenre(genre)}
                            >
                                <option value="">-- Filter by Genre --</option>
                                <option value="Pop"> Pop </option>
                                <option value="Trance"> Trance </option>
                                <option value="Hardstyle"> Hardstyle </option>
                                <option value="Hardcore"> Hardcore </option>
                                <option value="Eurodance"> Eurodance </option>
                                <option value="Rock"> Rock </option>
                                <option value="House"> House </option>
                                <option value="Nederlandstalig"> Nederlandstalig </option>
                                <option value="Other"> Other </option>
                            </select>                       
                        </th>

                        <th className="song-row__item">Rating
                            <select className="inputForm"
                                onChange={handlefilterByRating}
                            >
                                <option value="">-- Filter by Rating --</option>
                                <option value= "1"> 1 </option>
                                <option value= "2"> 2 </option>
                                <option value= "3"> 3 </option>
                                <option value= "4"> 4 </option>
                                <option value= "5"> 5 </option>
                            </select>
                            </th>
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
