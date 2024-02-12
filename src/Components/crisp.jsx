import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("5e1804e1-d295-42ef-abb5-ec3a7f4e98eb");
    Crisp.setPosition("left");
  }

  render() {
    return null;
  }
}
export default CrispChat;
