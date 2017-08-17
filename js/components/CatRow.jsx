import React, {Component} from 'react';

class CatRow extends Component {
  render(){
    const tab = this.props.kitties.map((a,indx) => {
      if(a.category === this.props.gender){
        if(this.props.search !== "" && a.name.toLowerCase().indexOf(this.props.search.toLowerCase())===-1){
          return null
        }
        if(this.props.likes === true && a.likesKids === false){
          return null
        }
        return <tr key={indx}>
        <td className="red">{a.name}</td>
        <td className="red">{a.age}</td>
        </tr>
      }
    })
    return <tbody>{tab}</tbody>
  }
}

export default CatRow;
