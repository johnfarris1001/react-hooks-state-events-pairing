import React, { useState } from 'react'

function UpDownVote({ upvotes, downvotes }) {
    const [newUpvotes, setUpvotes] = useState(upvotes)
    const [newDownvotes, setDownvotes] = useState(downvotes)

    return (
        <div>
            <button onClick={() => setUpvotes(newUpvotes + 1)} >{newUpvotes} 👍</button>
            <button onClick={() => setDownvotes(newDownvotes + 1)}>{newDownvotes} 👎</button>
        </div>
    )
}

export default UpDownVote