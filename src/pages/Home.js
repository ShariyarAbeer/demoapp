import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="HomePage">
        <h1>Home</h1>
        <h2>Question:</h2>
        <ul>
          <li>What is Facebook Home?</li>
        </ul>
        <h2>Answer:</h2>
        <p>
          Facebook and its partners have announced the HTC First, making a
          U-turn on something it said it would never do: launch a Facebook
          phone. It won't be for everyone, but Facebook does hope to tempt you
          in with a clever Android user interface tweak. And should you not
          fancy a new mid-range handset you can even convert your existing
          Android smartphone into a "Facebook Phone", using the company's new
          software. Called Facebook Home you can download it for your phone from
          12 April. So here's how to get it set up and what to expect when you
          do.
        </p>
      </div>
    );
  }
}

export default Home;
