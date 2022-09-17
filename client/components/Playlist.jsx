import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaylist } from '../actions/index'

function Playlist() {
  const songList = useSelector((state) => state.playlist)
  console.log(songList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlaylist())
  }, [])

  return (
    <>
      <h1> My Playlist </h1>

      {songList.map((song) => (
        <section key={song.id}>
          <h1>{song.songTitle}</h1>
          <h1>{song.artist}</h1>
          <h3>{song.review}</h3>
        </section>
      ))}
    </>
  )
}

export default Playlist
