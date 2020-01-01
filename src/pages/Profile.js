import React, { Component } from "react";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="ProfilePage">
        <h1>Profile</h1>
        <h2>Question:</h2>
        <ul>
          <li>Where is your Profile?</li>
        </ul>
        <h2>Answer:</h2>
        <p>
          A file or group of files stored on a user. These files may contain
          preferences, settings, contact information, credit information, etc. A
          profile allows the user's settings to be restored when that user logs
          back into the computer, network, or service.
        </p>
        <p>Also see: BIO, Internet terms, Profile site, User, User profile</p>
      </div>
    );
  }
}
export default Profile;
