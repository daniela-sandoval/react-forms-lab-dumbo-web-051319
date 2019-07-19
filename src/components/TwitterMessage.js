import React from "react";

class TwitterMessage extends React.Component {
  state = {
      avaiableCharacters: this.props.maxChars,
      message: ""
  }

  handleChange = (e) => {
    this.setState({
      avaiableCharacters: this.props.maxChars - e.target.value.length,
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.message} type="text" name="message" id="message" />
        <p>{this.state.avaiableCharacters} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
