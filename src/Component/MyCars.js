import  React, { Component } from 'react'
import Bouton from './Bouton';
import Cars from './Cars'
import Count from './Count'
import './Mycars.css';

class MyCars extends Component{

  state = {
    name: "Houda"
  };
  
  render() {
    return(
      <div className='profile'>
        <Cars/>
    <h1>Gourida {this.state.name}</h1>
      
      
      <Count />
      <Bouton />
      </div>
     
    )
  }
 }       
export default MyCars