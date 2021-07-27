import  React, { Component } from 'react'
import Cars from './Cars'
import Count from './Count'
import './Mycars.css';

class MyCars extends Component{

  state = {
    name: "Houda"
  };
  handleClick=()=>this.setState({name:'HOU '})
  render() {
    return(
      <div className='profile'>
        <Cars/>
    <h1>Gourida {this.state.name}</h1>
      <button onClick={this.handleClick}> ClickMe</button>
      
      <Count />
      </div>
     
    )
  }
 }       
export default MyCars