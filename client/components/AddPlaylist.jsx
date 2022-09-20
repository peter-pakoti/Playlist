import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makePlaylist } from '../actions/index'

function AddPlaylist() {
  const [form, setForm] = useState({ songTitle: '' })
  const dispatch = useDispatch()

  function handleChange(e) {
    console.log('event target', e.target)
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
    console.log(form)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(makePlaylist(form))
    setForm({
      songTitle: '',
      artist: '',
      review: '',
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            id="songTitle"
            name="songTitle"
            value={form.songTitle}
            onChange={handleChange}
            placeholder="Song name"
          />
          <input
            type="text"
            id="artist"
            name="artist"
            value={form.artist}
            onChange={handleChange}
            placeholder="Artist"
          />
          <input
            type="text"
            id="review"
            name="review"
            value={form.review}
            onChange={handleChange}
            placeholder="Review"
          />
        </label>
        <br></br>
        <label>
          <input type="submit" value="Add song" />
        </label>
      </form>
    </>
  )
}

export default AddPlaylist
