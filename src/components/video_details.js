import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react'

export default class VideoDetails extends Component {
	render() {
		if(this.props.currentVideo === undefined) {
			return <div>Loading...</div>
		}
		const videoId = this.props.currentVideo.id
		const url = `https://www.youtube.com/embed/${videoId}`

		return <div>
			<iframe src={url}>
			</iframe>
			<Header as='h3'>{this.props.currentVideo.title}</Header>
			<Header as='h4'>{this.props.currentVideo.title}</Header>
		</div>
	}
}