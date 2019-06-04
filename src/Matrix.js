import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectColor: null
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  selectedColor = () => {
    return this.state.selectColor
  }
  

  changeState = (som) => {
     console.log(som)
    this.setState({
      selectColor: som
    }, () => {console.log(this.state)})
  }    
  
  render() {
    return (
      <div id="app">
        <ColorSelector changeState={this.changeState}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

// export function takeColorIn(probablyArg){
//   console.log(probablyArg)
//   // console.log(this.state);
// }


Matrix.defaultProps = {
  values: chromeBoi
}
