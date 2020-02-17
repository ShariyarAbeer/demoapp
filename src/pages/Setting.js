import React, { Component, Link, href } from "react";
import { Avatar, Icon, Button, Row, Col } from "antd";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
});
class Setting extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="SettingPage">
          <h1>
            I'm available for freelancing. If you want something to be built,
            feel free to shoot me a email.
          </h1>
          <h2>Contact With Me</h2>
          <h3> Email - 007abeershariyar@gmail.com</h3>

          <h3>Phone - +8801558985372</h3>
        </div>
        <div style={{ marginTop: 250, marginLeft: 250 }}>
          <Icon
            type="facebook"
            onClick={(e): void => {
              e.preventDefault();
              window.location.href = "https://www.facebook.com/ShariyarAbeer";
            }}
            style={{ fontSize: "50px", marginRight: 20 }}
          />

          <Icon
            onClick={(e): void => {
              e.preventDefault();
              window.location.href = "https://github.com/ShariyarAbeer";
            }}
            style={{ fontSize: "50px", marginRight: 20 }}
            type="github"
          />
          <Icon
            type="twitter"
            onClick={(e): void => {
              e.preventDefault();
              window.location.href = "https://twitter.com/Shariyar_Abeer";
            }}
            style={{ fontSize: "50px", marginRight: 20 }}
          />
          <Icon
            type="linkedin"
            onClick={(e): void => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/mdarifshariyar/";
            }}
            style={{ fontSize: "50px", marginRight: 20 }}
          />
          <Icon
            type="instagram"
            onClick={(e): void => {
              e.preventDefault();
              window.location.href =
                "https://www.instagram.com/abeer_shariyar/";
            }}
            style={{ fontSize: "50px", marginRight: 20 }}
          />
        </div>
      </div>
    );
  }
}

export default Setting;
