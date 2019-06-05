import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  colorChange = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }


  render() {
    return (
      <div onClick={this.colorChange} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
