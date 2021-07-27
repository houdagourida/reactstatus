import React from 'react';
import MyCars from './Component/MyCars';
import './App.css';

class App extends React.Component {
  state = {
    name: "Sara"
  };
  handleClick=()=>this.setState({name:'Arya'})
  render() {
    return(
     <div>
             <MyCars/>
           
     </div>
    )
  }
 }
export default App;
