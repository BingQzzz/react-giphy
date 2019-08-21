import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'xT9IgDEI1iZyb2wqo8',
      // clicked: false
    };

    // this.search("dog");
  }


  search = (query) => {
    giphy('MIkGrJPS114ar0mhdCY83iBRvqdA7XVL').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }


  render() {
    const gifs = [
      { id: 'xT9IgDEI1iZyb2wqo8' },
      { id: 'u5H0ksmphChHi' }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>

        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
