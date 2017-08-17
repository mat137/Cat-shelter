import React, {Component} from 'react';
import CatRow from './CatRow.jsx';

class CatCategoryRow extends Component{

  render(){
    return <tr>
        <th colSpan="2" className="turquoise">{this.props.gender}</th>
    </tr>
  }
}

export default CatCategoryRow;
