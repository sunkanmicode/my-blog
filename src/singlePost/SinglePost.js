import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './singlePost.css'

export default function SinglePost() {
    const [singlePost, setSinglePost ] = useState({})
    const location = useLocation();
    const path = location.pathname.split('/')[2];

    //get single post
    const getPost = async ()=>{
        const response = await fetch(`http://localhost:5000/posts/${path}`);
        const data = await response.json();
        setSinglePost(data);
    }

    useEffect(()=>{
        getPost()
    },[path])
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                {singlePost.photo && (
                     <img className='singlePostImg' 
                     src={singlePost.photo}
                     alt="single post"
                 />
                )}
                   
                <h1 className='singlePostTitle'>
                    {singlePost.title}
                    <div className='singlePostEdit'>
                        <i class='singlePostIcon far fa-edit'></i> 
                        <i class='singlePostIcon far fa-trash-alt'></i> 
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        Author: 

                        <Link className='link' to={`/?user=${singlePost.username}`}>
                            <b>{singlePost.username}</b>
                        </Link>
                    </span>
                    <span className='singlePostDate'>
                       {new Date(singlePost.createdAt).toDateString()}
                    </span>
                </div>
                <p className='singlePostDesc'>
                    {singlePost.desc}
                </p>

            </div>
        </div>
    )
}
