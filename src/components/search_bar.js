import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Input } from 'semantic-ui-react'

export default class SearchBar extends Component  {

	constructor(props) {
	  super(props);
	  this.state = {
	    searchTerm: ""
	  };
	}

	componentWillMount() {
		
	}

	handleSearchChange = (e, { value }) => {
		this.setState({ 
			searchTerm: e.target.value
		})
		console.log(e.target.value)
	}

	render() {

		return <div>
			<Input
			fluid
            onChange={this.handleSearchChange}
          />
          Value being searched is : {this.state.searchTerm}
		</div>
	}
}