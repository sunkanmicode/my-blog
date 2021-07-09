import './sidebar.css'

export default function Sidebar() {
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
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Style</li>
                    <li className='sidebarListItem'>Tech</li>
                    <li className='sidebarListItem'>Clenea</li>
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
