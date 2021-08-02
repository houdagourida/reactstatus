import React from 'react';
import MyCars from './Component/MyCars';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isvisible:false,
    };}  
  
  render() {
    return(
     <div className="app">
             <MyCars/>
           <button className="button" onClick={this.togglevisiblity}>
             {this.state.isivible ? "Hide liste" : "show list"}
           </button>
           {this.state.isivible && <list/>}
           
     </div>
    )
  }
 }
export default App;
