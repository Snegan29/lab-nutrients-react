import React, { Component } from 'react'

export default class search extends Component {
  render() {
    return (
        <div>
        <input type="search" placeholder='type here' onChange={(e)=>this.props.handleSearch(e.target.value)} />
      </div>
    )
  }
}
