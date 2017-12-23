import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image } from 'semantic-ui-react'

export default class VideoListItems extends Component {

	render() {
		return <Grid>
			<Grid.Column width={6}>
			<Image 
				src={this.props.videos.thumbnails.default.url}
			/>
			</Grid.Column>
			<Grid.Column width={10}>
			{this.props.videos.title}
			</Grid.Column>
		</Grid>
	}
}