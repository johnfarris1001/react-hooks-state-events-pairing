import React from 'react'
import UpDownVote from './UpDownVote'

function Comment({ comment }) {
    return (
        <div>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
            <UpDownVote upvotes={0} downvotes={0} />
        </div>
    )
}

export default Comment