import React, { Component } from 'react'
import './App.css'
import FoodBox from './component/FoodBox'
import FoodData from './component/FoodData'
import Search from './component/search'

export default class App extends Component {

  constructor(props){
    super(props),
    this.state = {
      search:" ",
    }
  }

  handleSearch=(itemInfo)=>{
    this.setState({search:itemInfo})
  }
  render() {
    return (
      <div >
        {/* Search function here */}
        <Search handleSearch = {this.handleSearch}/>
        {
          FoodData.filter((item)=>{    {/* Filter function to filter food items according to search*/}
            if(this.state.search==""){
              return item
            }else if(item.name.toLowerCase().includes(this.state.search.toLowerCase())){
              return item
            }
          }).map((item)=>{
            return(
              <div key = {item.id}>
                <FoodBox food = {item}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
