import React, { Component } from "react";
import { Timeline, Typography } from "antd";

const { Title } = Typography;

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="ProfilePage">
        <Title level={2}>
          Intend to work in IT and development field where strong sense of
          responsibility and commitment is required.{" "}
        </Title>
        <Timeline>
          <Timeline.Item color="green">
            <h4>Campus Ambassador at Young Bangla</h4>
            <p>13th September 2019 to Present</p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <h4>Junior Programmer at ProjectCity</h4>
            <p>3rd March 2019 to Present</p>
          </Timeline.Item>
          <Timeline.Item color="red">
            <h4>
              Event Coordinator at East West University Telecommunications Club
            </h4>
            <p>8th May 2019 to Present</p>
          </Timeline.Item>
          <Timeline.Item>
            <h4>Android Developer at NextAppsBD</h4>
            <p>1st February 2018 to 30th January 2019</p>
          </Timeline.Item>

          <Timeline.Item color="gray">
            <h4>Volunteer at East West University Telecommunications Club</h4>
            <p>Worked as Volunteer in Telco Warfare2016 </p>
            <p>International Warfare 2017 </p>
            <p>International Telco Warfare 2018</p>
            <p>Currently General Member</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <h4>Volunteer at OWS - Organization of Welfare for Society</h4>
            <p>Currently Senior Member</p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }
}
export default Profile;
