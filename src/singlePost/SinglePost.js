import { useEffect, useState, useContext } from 'react';
import { Context } from '../context/Context';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './singlePost.css'
import axios from 'axios';

export default function SinglePost() {
    const [singlePost, setSinglePost ] = useState({});
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false)
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const PF = 'http://localhost:5000/images/';
    const { user } = useContext(Context);

    //get single post
    const getPost = async ()=>{
        const response = await fetch(`http://localhost:5000/posts/${path}`);
        const data = await response.json();
        setSinglePost(data);
        setTitle(data.title);
        setDesc(data.desc)
    }

    useEffect(()=>{
        getPost()
    },[path])

    //handledelete
    const handleDelete = async()=>{
        try {
            await axios.delete(`http://localhost:5000/posts/${singlePost._id}`, {
                data:{ username: user.username }
            })
            window.location.replace("/")
        } catch (error) {
            
        }
    }
    
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                {singlePost.photo && (
                     <img className='singlePostImg' 
                     src={PF + singlePost.photo}
                     alt="single post"
                 />
                )}
                   {updateMode ? (
                       <input type='text' value={title} className='singlePostTitleInput' autoFocus onChange={(e)=>setTitle(e.target.value)} />
                   ) : (
                <h1 className='singlePostTitle'>
                    {singlePost.title}
                    {singlePost.username === user?.username && (
                        <div className='singlePostEdit'>
                        <i class='singlePostIcon far fa-edit' onClick={()=>setUpdateMode(true)}></i> 
                        <i class='singlePostIcon far fa-trash-alt' onClick={handleDelete}></i> 
                    </div>
                    )}  
                </h1>
                )}
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
                {updateMode? (
                    <textarea className='singlePostDescInput' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                ) : (
                    <p className='singlePostDesc'>
                    {singlePost.desc}
                </p>
                )}
            </div>
        </div>
    )
}
