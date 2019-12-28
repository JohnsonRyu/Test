import React, { Component } from "react";

import { Container } from "../atoms/Container";
import { Text } from "../atoms/Text";

interface ITextWithUnitProps {
  first?: string;
  second?: string;
  space?: boolean;
}

export class TextWithUnit extends Component<ITextWithUnitProps> {
  render() {
    return (
      <Container>
        <Text>{this.props.first}</Text>
        {this.props.space === true ? <span>&nbsp;</span> : <></>}
        <Text>{this.props.second}</Text>
      </Container>
    );
  }
}