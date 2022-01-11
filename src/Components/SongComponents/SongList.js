import React, { useContext } from 'react';

import SongItem from './SongItem';
import {SongContext} from '../../SongContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCaretSquareUp, faCaretSquareDown  } from '@fortawesome/free-solid-svg-icons';


const SongList = () => {

   
    const [songs, setSongs] = useContext(SongContext);

    // Sort Title Alphabetic
  
    
    // Filter By Genre
    const handlefilterByGenre = (e) => {

        let currentGenre = e.target.value;
            
        const updateGenreState = songs.map((song) => {
            song.hidden = ! song.genre.toLowerCase().includes(currentGenre.toLowerCase())
            return song;
        });
        
        setSongs(updateGenreState)
    }
    

    // Filter by Rating
    const handlefilterByRating = (e) => {
    
        let currentRating = e.target.value;

        const updateRatingState = songs.map((song) => {
            song.hidden = ! song.rating.toLowerCase().includes(currentRating.toLowerCase())
            return song;
        });
        
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

    const ListOfSongs = songs.filter(song => !song.hidden).map(song => (
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
                        <th className="song-row__title">Title
                            <br></br>
                            <button className="btn-title"><FontAwesomeIcon icon={faCaretSquareUp} /></button>
                            <button className="btn-title"><FontAwesomeIcon icon={faCaretSquareDown} /></button>
                        </th>

                        <th className="song-row__item">Artist 
                            <br></br>
                            <button className="btn-title"><FontAwesomeIcon icon={faCaretSquareUp} /></button>
                            <button className="btn-title"><FontAwesomeIcon icon={faCaretSquareDown} /></button>
                        </th>

                        <th className="song-row__item">Genre
                            <select className="inputForm" 
                                onChange={handlefilterByGenre}
                            >
                                <option value="">--</option>
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
                            <select className="inputForm-rating"
                                onChange={handlefilterByRating}
                            >
                                <option value="">--</option>
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
