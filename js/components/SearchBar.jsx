import React, {Component} from 'react';

class SearchBar extends Component {

setFilter = () => {

}

  render(){
    return <form className="blue">

      <div><label>Search by name:
      <input type="text"
      value={this.props.val}
      onChange={this.props.handleChangeText}></input></label></div>

      <div><label>Children-friendly :
      <input type="checkbox"
      onChange={this.props.handleChangeBox}></input></label></div>

    </form>
  }
}

export default SearchBar;
