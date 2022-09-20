import React from 'react'

import Playlist from './Playlist'
import AddPlaylist from './AddPlaylist'

function App() {
  return (
    <>
      <header className="header">
        <h1>Playlist</h1>
      </header>
      <AddPlaylist />
      <Playlist />
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
