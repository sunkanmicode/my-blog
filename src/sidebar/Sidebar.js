import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar() {
    const [cats, setCats ] = useState([])
    
    const fetchCat = async()=>{
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCats(data);
    }
    useEffect(()=>{
        fetchCat()
    },[])
    
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src='https://image.shutterstock.com/image-photo/two-sun-beds-under-blue-260nw-313934216.jpg' alt='' />
                <p>Her hunger for knowledge and determination to turn information into action has contribute. </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {cats.map((cat)=>(
                        <Link className='link' to={`/?cat=${cat.name}`}>
                            <li className='sidebarListItem'>{cat.name}</li>  
                        </Link>
                         
                    ))}
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    )
}
