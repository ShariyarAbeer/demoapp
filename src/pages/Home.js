import React, { Component, Row, Col, initial } from "react";
import { Card, Avatar, Divider, Typography } from "antd";

const { Title } = Typography;
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="HomePage">
        <Title level={1}>Md.Arif Shariyar</Title>

        <Title level={3}>
          Hi. I’m Md.Arif SHariyar Abeer, a developer from Dhaka, Bangladesh. I
          am passionate about building excellent apps and website that improves
          the lives of those around me. I specialize in creating apps and
          website for clients ranging from individuals and small-businesses all
          the way to large enterprise corporations. All of my work is produced
          locally from Dhaka.
        </Title>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Title level={2}>
          You can send me email to '007abeershariyar@gmail.com'
        </Title>
      </div>
    );
  }
}

export default Home;
