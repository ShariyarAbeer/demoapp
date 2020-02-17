import React, { Component } from "react";
import { Timeline } from "antd";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="PostPage">
        <Timeline>
          <Timeline.Item color="gray">
            <h4>
              B.Sc. In Information & Communication Engineering (ICE) at East
              West University{" "}
            </h4>
            <p>Current Student</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <h4>Higher Secondary Certificate(HSC) at Dhaka Imperial College</h4>
            <p>Group Science</p>
            <p>Result GPA 4.75</p>
            <p>Passing year 2015</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <h4>
              Secondary School Certificate(SSC) at Motijheel Model High School
              and College
            </h4>
            <p>Group Science</p>
            <p>Result GPA 4.56</p>
            <p>Passing year 2013</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <h4>• </h4>
            <p>Currently Senior Member</p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

export default Post;
