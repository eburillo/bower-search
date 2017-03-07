import React, { Component } from 'react';
import styled from 'styled-components';

class ErrorMessage extends Component {
  render() {
    return (
      <Message>
        {this.props.text}
      </Message>
    );
  }
}

const Message = styled.p`

`;

export default ErrorMessage;
