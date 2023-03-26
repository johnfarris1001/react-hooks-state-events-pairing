import React, { useState } from 'react'
import Comment from './Comment'

function CommentCard({ comments, visible }) {
    const [search, setSearch] = useState("")

    const commentsToDisplay = comments.filter(comment => {
        if (comment.user.includes(search)) return true
    }).map(comment => {
        return <Comment key={comment.id} comment={comment} />
    })

    function handleChange(event) {
        setSearch(event.target.value)
    }



    return (
        <div>
            <h2>{comments.length} Comments</h2>
            <form>
                <label>Search by user:   <input value={search} onChange={handleChange} type="text" name="text" />
                </label>
            </form>
            {visible ? commentsToDisplay : null}
        </div>
    )
}

export default CommentCard