import './register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Register() {
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(false);


    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(false)
        try {

            const body = { username, email, password }
            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
        });
            const data = await response.json();
            data && window.location.replace("/login");
            console.log(data);
        } catch (err) {
            setError(true)
        }
        
    }

    return (
        <div className='login'>
            <span className='loginTitle'>Register</span>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type='text' 
                    className='loginInput' 
                    placeholder='name' 
                    onChange={e=>setUsername(e.target.value)}
                />
                <label>Email</label>
                <input 
                    type='email' 
                    className='loginInput' 
                    placeholder='email@example.com'
                    onChange={e=>setEmail(e.target.value)}

                />
                <label>Password</label>
                <input 
                    type='password' 
                    className='loginInput' 
                    onChange={e=>setPassword(e.target.value)}
                />
                <button className='loginButton' type='submit'>
                    Register
                </button>
            </form>   
            <button className='loginRegisterButton'>    
            <Link to='/login' className='link'>Login</Link>
            </button>
            {error && <span style={{color:'red', marginTop: '10px'}}>something went wrong!</span>}
        </div>
    )
}
