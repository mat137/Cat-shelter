import React, {Component} from 'react';
import CatCategoryRow from './CatCategoryRow.jsx';
import CatRow from './CatRow.jsx';


class CatTable extends Component{

getCategory = () => {

}

  render(){
    return <table className="green">

    <thead>
      <tr>
        <th>name</th>
        <th>age</th>
      </tr>
    </thead>

    <tbody>
      <CatCategoryRow gender="male" />
    </tbody>
    <CatRow kitties={this.props.kitties}
    search={this.props.search}
    likes={this.props.likes}
    gender="male"/>

    <tbody>
      <CatCategoryRow gender="female" />
    </tbody>
    <CatRow kitties={this.props.kitties}
    search={this.props.search}
    likes={this.props.likes}
    gender="female"/>

    </table>
  }
}

export default CatTable;
