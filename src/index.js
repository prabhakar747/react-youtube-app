import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer'


const YT_API = 'AIzaSyDqL_re6cE8YhtNr_O7GvX1SX3aQo1clyg';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: YT_API, term: 'call of duty'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoPlayer video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
          videos={this.state.videos}
        />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
