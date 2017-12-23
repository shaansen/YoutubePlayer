import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Grid } from 'semantic-ui-react'
import SearchBar from './components/search_bar'
import VideoDetails from './components/video_details'
import VideoList from './components/video_list'
import youtubeSearch from "youtube-search"

const API_KEY = 'AIzaSyBqCVmYmRdD0IgOufeJjXuMBR0S6y-FBn0'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			videos: []
		}
		let opts: youtubeSearch.YouTubeSearchOptions = {
		  maxResults: 10,
		  key: API_KEY
		};
		youtubeSearch("surfboards", opts, (err, results) => {
		  if(err) return console.log(err);
		 
		  this.setState({videos: results,currentVideo: results[0]})
		});
	}


	render() {
		return <div>
			<Container>
				<Header as='h1'>YouTube Player</Header>
				<SearchBar />
				<Grid>
					<Grid.Column width={10}>
						<VideoDetails currentVideo={this.state.currentVideo}/>
					</Grid.Column>
					<Grid.Column width={6}>
						<VideoList videos={this.state.videos} />
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	}
}

ReactDOM.render(<App />,document.querySelector('#root'))