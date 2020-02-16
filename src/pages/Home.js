import React, { Component, Row, Col, initial } from "react";
import { Card, Avatar, Divider } from "antd";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="HomePage">
        <img
          width={200}
          height={200}
          className="mr-7"
          src="https://scontent.fdac15-1.fna.fbcdn.net/v/t1.0-9/29497614_815393248852087_9185027329996104120_n.jpg?_nc_cat=100&_nc_ohc=kDJdbIvBcZoAX-CytLd&_nc_ht=scontent.fdac15-1.fna&oh=7d3281b224f119daf1cc35134b630d11&oe=5EF8788A"
          alt="Generic placeholder"
        />
        <h1>Md.Arif Shariyar</h1>

        <Card>
          Hi. I’m Md.Arif SHariyar Abeer, a developer from Dhaka, Bangladesh. I
          am passionate about building excellent apps and website that improves
          the lives of those around me. I specialize in creating apps and
          website for clients ranging from individuals and small-businesses all
          the way to large enterprise corporations. All of my work is produced
          locally from Dhaka.
        </Card>
      </div>
    );
  }
}

export default Home;
