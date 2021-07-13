import './register.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login'>
            <span className='loginTitle'>Register</span>
            <form className='loginForm'>
                <label>Username</label>
                <input type='text' className='loginInput' placeholder='name' />
                <label>Email</label>
                <input type='email' className='loginInput' placeholder='email@example.com' />
                <label>Password</label>
                <input type='password' className='loginInput' />
                <button className='loginButton'> Register</button>
            </form>   
            <button className='loginRegisterButton'>
            <Link to='/login' className='link'>Login</Link>
            </button>
        </div>
    )
}
