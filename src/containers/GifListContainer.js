import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor(){
    super()
    this.state = { firstThree: []}
  }

  handleSearchSubmit = data => {
    alert(`You searched for ${data.searchTerm}`)
    fetch(`https://api.giphy.com/v1/gifs/search?q=${data.searchTerm}&api_key=WdGDzV4EdZRawJ20PlAWzlKsl1ZqMqQV&rating=g`)
      .then(res => res.json())
      .then(json => {
          const array = json.data.slice(0, 3)
          console.log(array);
          this.setState({firstThree: array})
        }
      )
  }

  render(){
    return(
      <div>
        List of Gifs
        <GifList firstThree={this.state.firstThree}/>
        <GifSearch onSubmit={this.handleSearchSubmit}/>
      </div>
    )
  }
}