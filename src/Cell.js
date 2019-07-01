import React, { Component } from 'react';

export default class Cell extends Component {

  state = {
    color: this.props.color
  }

  handleClick = () => {
    // console.log(this.props.updateColor)
    const newColor = this.props.updateColor
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}/>
    )
  }

}
