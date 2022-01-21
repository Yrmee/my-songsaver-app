import React, { useState, useContext } from 'react'
import { SongContext } from '../../SongContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const SongForm = () => {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState('')

  const [ , setSongs] = useContext(SongContext)

  const updateTitle = e => {
    setTitle(e.target.value)
  }

  const updateArtist = e => {
    setArtist(e.target.value)
  }

  const updateGenre = e => {
    setGenre(e.target.value)
  }

  const updateRating = e => {
    setRating(e.target.value)
  }

  const addSong = e => {
    e.preventDefault()

    if (title === '') {
      alert('Title field empty')
      return
    }

    if (artist === '') {
      alert('Artist field empty')
      return
    }

    if (genre === '') {
      alert('Choose genre')
      return
    }

    if (rating === '') {
      alert('Choose rating')
      return
    }

    setSongs(prevSongs => [
      ...prevSongs,
      {
        id: prevSongs[prevSongs.length - 1].id + 1,
        title: title,
        artist: artist,
        genre: genre,
        rating: rating
      }
    ])

    setTitle('')
    setArtist('')
    setGenre('')
    setRating('')
  }

  return (
    <form className="songForm" onSubmit={addSong}>
      <input
        className="inputForm"
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={updateTitle}
      />

      <input
        className="inputForm"
        type="text"
        name="artist"
        placeholder="Artist"
        value={artist}
        onChange={updateArtist}
      />

      <select className="inputForm" value={genre} name="genre" onChange={updateGenre}>
        <option value="choose"> Choose genre </option>
        <option value="Pop"> Pop </option>
        <option value="Trance"> Trance </option>
        <option value="Hardstyle"> Hardstyle </option>
        <option value="Hardcore"> Hardcore </option>
        <option value="Eurodance"> Eurodance </option>
        <option value="Rock"> Rock </option>
        <option value="House"> House </option>
        <option value="Other"> Other </option>
      </select>

      <select className="inputForm" name="rating" value={rating} onChange={updateRating}>
        <option value="choose"> 1-5 </option>
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
      </select>

      <button className="btn-add-song" type="submit">
        <FontAwesomeIcon icon={faPlusSquare} /> Add
      </button>
    </form>
  )
}

export default SongForm
