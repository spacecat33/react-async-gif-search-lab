import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

class App extends React.Component {
  
    render(){
    return (
      <div>
          < NavBar color='black' title="Giphy Search" />
          < GifListContainer />
      </div>
    )
  }

}

export default App


// MY GIPHY API KEY: https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=WdGDzV4EdZRawJ20PlAWzlKsl1ZqMqQV&rating=g