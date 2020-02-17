import React, { Component, Link, href } from "react";
import { Avatar, Icon, Button } from "antd";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
});
class Setting extends Component {
  state = {};
  render() {
    return (
      <div className="SettingPage">
        <h1>Contact With Me</h1>
        <h2> Email - 007abeershariyar@gmail.com</h2>

        <h2>Phone - +8801558985372</h2>
      </div>
    );
  }
}

export default Setting;
