import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars : this.props.maxChars,
      input : "",
      chars : 0
    };
  }

  handleChangeEvent = (event) => {
    this.setState({
      input : event.target.value,
      chars : event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChangeEvent(event)} value = {this.state.input}/>
        <p>{this.state.maxChars - this.state.chars}</p>
      
      </div>
    );
  }
}

export default TwitterMessage;
