import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    // u5H0ksmphChHi
    // xT9IgDEI1iZyb2wqo8
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
