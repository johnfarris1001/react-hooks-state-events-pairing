import video from "../data/video.js";
import React, { useState } from 'react'
import VideoInformation from "./VideoInformation.js";
import CommentCard from "./CommentCard.js";

function App() {
  const [toggleComments, setToggleComments] = useState(true)

  function handleClick() {
    setToggleComments(!toggleComments)
  }


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <VideoInformation video={video} />
      <br />
      <button onClick={handleClick} >{toggleComments ? 'Hide Comments' : 'Show Comments'}</button>
      <hr />
      <CommentCard visible={toggleComments} comments={video.comments} />
    </div>
  );
}

export default App;
