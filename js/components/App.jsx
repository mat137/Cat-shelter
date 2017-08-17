import React, {Component} from 'react';
import SearchBar from './SearchBar.jsx';
import CatTable from './CatTable.jsx';

const mainStyle = {
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
  fontSize: "20px"
}

var kitties = [
 {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
 {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
 {category: "male", age: "2", likesKids: false, name: "Grumpy"},
 {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
 {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
 {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      val: "",
      likes: false
    }
  }

handleChangeText = (event) => {
  this.setState({
    val: event.target.value
  });

  // console.log(this.state.val);
}

handleChangeBox = () => {
  this.setState({
    likes: !this.state.likes
  })
  // console.log(this.state.likes);
}


  render(){
    return <section style={mainStyle}>

      <SearchBar val={this.state.val}
      handleChangeText={this.handleChangeText}
      handleChangeBox={this.handleChangeBox}
      />

      <CatTable kitties={kitties}
      search={this.state.val}
      likes={this.state.likes}/>

    </section>
  }
}

export default App;
