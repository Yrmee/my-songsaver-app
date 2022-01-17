import React, { useState, useEffect, useContext } from 'react';
import SongItem from './SongItem';
import {SongContext} from '../../SongContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSort } from '@fortawesome/free-solid-svg-icons';


const SongList = () => {
   
    const [songs, setSongs] = useContext(SongContext);
    

    // Sort Title and Artist Alphabetic
    const [order, setOrder] = useState("ASC");

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...songs].sort((a, b) => 
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setSongs(sorted);
            setOrder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...songs].sort((a, b) => 
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setSongs(sorted);
            setOrder("ASC");
        }
    }

    // Function Filter Genre and Rating
    const [filteredGenre, setFilteredGenre] = useState(null);
    const [filteredRating, setFilteredRating] = useState(null);

    useEffect(() => {
        filter();
    }, [filteredGenre, filteredRating])

    const filter = () => {
        const updateState = songs.map( (song) => {
            const filterRating = filteredRating ? song.rating.includes(filteredRating) : true;
            const filterGenre = filteredGenre ? song.genre.toLowerCase().includes(filteredGenre.toLowerCase()) : true;

            song.hidden = ! (filterGenre && filterRating);
            return song;
        });

        setSongs(updateState)
    }

    // Filter By Genre
    const handlefilterByGenre = (e) => {
        setFilteredGenre(e.target.value);
    }
    
    // Filter by Rating
    const handlefilterByRating = (e) => {
        setFilteredRating(e.target.value);
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

            <table className="playlist-table" style={{width: "100%"}}>

                <thead className="playlist-song--header">  
                    <tr>
                    <th className="song-row__item">
                        <button className="btn-sort" onClick={() => sorting("title")}>
                            <FontAwesomeIcon icon={faSort} />
                        </button> Title 
                        </th>

                        <th className="song-row__item">
                            <button className="btn-sort" onClick={() => sorting("artist")}>
                                <FontAwesomeIcon icon={faSort} />
                            </button> Artist 
                        </th>

                        <th className="song-row__item">Genre 
                            <select className="inputFilterGenre" onChange={handlefilterByGenre}> 
                                <option value="">--</option>
                                <option value="Pop"> Pop </option>
                                <option value="Trance"> Trance </option>
                                <option value="Hardstyle"> Hardstyle </option>
                                <option value="Hardcore"> Hardcore </option>
                                <option value="Eurodance"> Eurodance </option>
                                <option value="Rock"> Rock </option>
                                <option value="House"> House </option>
                                <option value="Other"> Other </option>
                            </select>                       
                        </th>

                        <th className="song-row__item"> Rating 
                            <select className="inputFilterRating" onChange={handlefilterByRating}>
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
