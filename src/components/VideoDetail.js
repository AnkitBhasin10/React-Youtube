import React from "react";

class VideoDetail extends React.Component {
  render() {
    if (!this.props.video) {
      return <div>Let's find you a video to play...</div>;
    }

    const videoSrc = `https://youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe title="youtube video player" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4>{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
