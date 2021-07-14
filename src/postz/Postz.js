import React from 'react'
import Post from '../post/Post'
import "./postz.css"

export default function Postz({ posts }) {
    return (
        <div className='postz'>
            {posts.map((p)=>{
                return(
                    <Post post={p} />
                )
            })}

        </div>
    )
}
