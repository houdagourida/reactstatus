import  React from 'react'
import App from '../App';

class Bouton extends React.Component {
 constructor(props){
   super(props)
   this.state  ={

   };
}
todos =[
  <App/>
];
render(){
    return(
    <div>
        <ul className="list">
            {this.todos.map((todo, i)=>(
                <li key={i}>{todo}</li>
            ))}

        </ul>
    </div>
    );
    
}
}

  export default Bouton