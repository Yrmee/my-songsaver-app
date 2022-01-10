import React, {useState, createContext} from 'react';

export const SongContext = createContext();

export const SongProvider = (props) => {
    
    const [songs, setSongs] = useState([
            {id: 1, title: "The Beauty Of Silence", artist: "Svenson&Gielen", genre: "Trance", rating:"4"},
            {id: 2, title: "Love, Dance And Feel", artist: "Sunnery James & Ryan Marciano", genre: "House", rating:"4"},
            {id: 3, title: "The Sun Will Be Shining", artist: "2 Brothers On The 4th Floor", genre: "Eurodance", rating:"4"},
            {id: 4, title: "Larger Than Life", artist: "Backstreet Boys", genre: "Pop", rating:"4"},
            {id: 5, title: "So High", artist: "Noisecontrollers", genre: "Hardstyle", rating:"5"},
            {id: 6, title: "Beat As One", artist: "D-Block & S-te-Fan, F8trix", genre: "Hardstyle", rating:"5"},
            {id: 7, title: "The Promised Land - The Viper Remix", artist: "Paul Elstak, The Viper", genre: "Hardcore", rating:"5"},
            {id: 8, title: "Gimme more", artist: "Britney Spears", genre: "Pop", rating:"5"},
            {id: 9, title: "Jump For Joy", artist: "2 Unlimited", genre: "Eurodance", rating:"5"},
            {id: 10, title: "Right Here, Right Now", artist: "Fatboy Slim", genre: "House", rating:"4"}
    ]);

   

    return(
        <SongContext.Provider value={[songs, setSongs]}>
            {props.children}
        </SongContext.Provider>
    );
}