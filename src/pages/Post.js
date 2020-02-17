import React, { Component } from "react";
import { Timeline } from "antd";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="PostPage">
        <Timeline>
          <Timeline.Item color="gray">
            <h3>
              B.Sc. In Information & Communication Engineering (ICE) at East
              West University{" "}
            </h3>
            <p>Current Student</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <h3>Higher Secondary Certificate(HSC) at Dhaka Imperial College</h3>
            <p>Group Science</p>
            <p>Result GPA 4.75</p>
            <p>Passing year 2015</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <h3>
              Secondary School Certificate(SSC) at Motijheel Model High School
              and College
            </h3>
            <p>Group Science</p>
            <p>Result GPA 4.56</p>
            <p>Passing year 2013</p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

export default Post;
