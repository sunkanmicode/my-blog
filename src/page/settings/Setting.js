import Sidebar from '../../sidebar/Sidebar'
import "./setting.css"

export default function Setting() {
    return (
        <div className='setting'>
            <div className='settingWrapper'>
                <div className='settingTitle'>
                    <span className='settingUpdateTitle'>
                        Update your Account
                    </span>
                    <span className='settingDeleteTitle'>
                        Delete Account
                    </span>
                </div>
                <form className='settingForm'>
                    <label>Profile Picture</label>
                    <div className='settingPP'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2r1MxzDiHSDYyESETkjwWqEUTq5aawAVVeGYf3QSLn9Q3KRi8FZuU61Kt3a-LwXBua0&usqp=CAU' alt=''/>
                        <label htmlFor='fileInput'>
                            <i className='settingPPIcon far fa-user-circle'></i>
                        </label>
                        <input type='file' id='fileInput' style={{display:'none'}} />
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Lasun' />
                    <label>Email</label>
                    <input type='email' placeholder='example@gmail.com' />
                    <label>Password</label>
                    <input type='password' />
                    <button className='settingSubmit'>Update</button>
                </form>
            </div>  
            <Sidebar />
        </div>
    )
}
