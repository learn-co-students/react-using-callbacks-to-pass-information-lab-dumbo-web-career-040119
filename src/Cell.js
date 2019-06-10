import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  draw = () => {
    this.setState({
      color: this.props.brushColor
    })
  }

  render() {
    return (
      <div onClick={this.draw.bind(this)} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
