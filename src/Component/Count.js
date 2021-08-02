import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
      console.log('constructor()')
      super(props)
  
      this.state = {
           count:0,
           memory:null,
      }
  }
  componentDidMount(){
      console.log('componentDidMount');
    //   setTimeout(() => {
    //       this.setState({count :this.state.count + 10  });
    //   }, 5000);
    this.setState({memory : setInterval(() => {
        this.setState({count :this.state.count + 1  });
    }, 1000) });
    
  }
  
  componentDidUpdate(){
      console.log('componentDidUpdate');
     
  }

  componentWillUnmount(){
      console.log('componentWillUnmount');
      clearInterval(this.state.memory);
  }
  encrement=() => {
    this.setState({ count: this.state.count +1  });
  }
  decrement=() => {
      this.state.count>0 ? 
    this.setState({  count: this.state.count -1   }): alert('yezzzzy')
  }
  
    render() {
        console.log('render()');
        console.log(this.state.memory)
        return (
            <div>
                <button onClick={this.encrement}> + </button>
              <p> {this.state.count}  </p>
              <button onClick={this.decrement}> - </button>  
            </div>
        )
    }
}

export default Counter
