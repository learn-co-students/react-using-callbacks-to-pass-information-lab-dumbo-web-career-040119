import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell getSelectedColor={this.getSelectedColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  state = {
    selectedColor: '#FFF'
  }

  getSelectedColor = () => {
    return this.state.selectedColor
  }

  changeSelectedColor = (color) => {
    console.log(this.state.selectedColor);
    this.setState({
      selectedColor: color
    })
  }


  render() {
    return (
      <div id="app">
        <ColorSelector color={this.changeSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
