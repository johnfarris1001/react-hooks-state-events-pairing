import React, { useState } from 'react'
import UpDownVote from './UpDownVote'

function VideoInformation({ video }) {

    return (
        <div>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <UpDownVote upvotes={video.upvotes} downvotes={video.downvotes} />
        </div>
    )
}

export default VideoInformation