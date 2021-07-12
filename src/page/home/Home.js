import Header from '../../header/Header'
import Postz from '../../postz/Postz'
import Sidebar from '../../sidebar/Sidebar';

import './home.css'

export default function Home() {
    return (
        <>
            <Header />
            <div className='home'>
               <Postz />
                <Sidebar />
            </div>
        </>
    )
}
