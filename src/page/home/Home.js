import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../header/Header'
import Postz from '../../postz/Postz'
import Sidebar from '../../sidebar/Sidebar';
// import axios from 'axios';

import './home.css'

export default function Home() {
    const [ posts, setPosts ] = useState([]);
    const {search} = useLocation();
    
    

    //fetch posts
    const fetchPosts = async()=>{
        const response = await fetch(`http://localhost:5000/posts${search}`);
        const data = await response.json()
        setPosts(data);
    }
   
    useEffect(() => {
        fetchPosts()
    }, [search])
    return (
        <>
            <Header />
            <div className='home'>
                <Postz posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}
