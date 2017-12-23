import React, { Component } from 'react'
import VideoListItems from './video_list_item'

export default class VideoList extends Component {

	render() {

		const items = this.props.videos.map((videos) => {
			return <VideoListItems 
				videos={videos}
				key={videos.id}
			/>
		})

		return <ul>
		{items}
		</ul>
	}
}