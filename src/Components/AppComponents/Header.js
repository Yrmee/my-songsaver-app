import React, { useContext } from 'react'
import { SongContext } from '../../SongContext'

const Header = () => {
  const [songs] = useContext(SongContext)
  return (
    <div>
      <h1>SongSaver</h1>

      <h3>This playlist contains {songs.length} songs</h3>
    </div>
  )
}

export default Header
