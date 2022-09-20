import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaylist } from '../actions/index'

function Playlist() {
  const songList = useSelector((state) => state.playlist)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlaylist())
  }, [])

  return (
    <>
      <header className="myPlaylistHeader">
        <h1> My Playlist </h1>
      </header>

      <div className="MySongs">
        {songList?.map((song) => (
          <section key={song.id}>
            <h1> Song Title: {song.songTitle}</h1>
            <h3> Artist: {song.artist}</h3>
            <h3> Review: {song.review}</h3>
          </section>
        ))}
      </div>
    </>
  )
}

export default Playlist
