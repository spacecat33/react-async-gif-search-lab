import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App

// MY GIPHY API KEY: https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=WdGDzV4EdZRawJ20PlAWzlKsl1ZqMqQV&rating=g