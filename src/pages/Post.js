import React, { Component } from "react";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="PostPage">
        <h1>Post</h1>
        <h2>Question:</h2>
        <ul>
          <li>What Is a Facebook Post?</li>
        </ul>
        <h2>Answer:</h2>
        <p>
          A Facebook post or "status update" is a message in a special delivery
          cyber-bottle. It is a comment, picture or other media that is posted
          on the user's Facebook page or "wall." A Little Bit Longer Unlike
          Tweets, Facebook posts aren't limited to 140 characters. They can be
          as long as a paragraph and illustrated with pictures and videos. Users
          can post directly to Facebook via smart phones or uploaded from a
          computer. As with any social media platform, there is a method to
          creating a successful Facebook post.
          <li>7 Qualities of a Bangin' Facebook</li>
          Post Facebook posts are about invoking engagement and action.
          According to SocialApps HQ (the largest Facebook app store) (2012), an
          excellent Facebook post has the following 7 qualities:
          <li>It grabs! your reader's attention.</li>
          <li>Has "no brainer" text</li>
          <li>
            Contains a call for action, such as asking a question or requesting
            that you like something.
          </li>
          <li>
            Is appropriate for the demographics and geographic location of your
            fan base. (Yes, demographics and geography are important on the
            web.){" "}
          </li>
          <li>
            It contains content that 95% of your audience cares (or better yet -
            is passionate) about.{" "}
          </li>
          <li>
            Sells the dream of your company and fan base (If you don't know
            already, find out what that dream is.){" "}
          </li>
          <li>Is based on what you have learned from ad-testing</li>
        </p>
      </div>
    );
  }
}

export default Post;
