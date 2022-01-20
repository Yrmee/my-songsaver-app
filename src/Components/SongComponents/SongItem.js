import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const SongItem = ({ id, title, artist, genre, rating, deleteSong }) => {
  return (
    <tr className="songItem" key={id} id={id}>
      <td> {title || ' '} </td>
      <td> {artist || ' '} </td>
      <td> {genre || ' '} </td>
      <td> {rating || ' '} </td>

      <td>
        {' '}
        <button className="btn-remove-song" onClick={() => deleteSong(id)}>
          {' '}
          <FontAwesomeIcon icon={faTrashAlt} />{' '}
        </button>{' '}
      </td>
    </tr>
  )
}

export default SongItem
