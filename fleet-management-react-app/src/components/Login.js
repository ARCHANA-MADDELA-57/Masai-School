import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const navigate = useNavigate();

    useEffect(()=>{
        emailRef.current.focus();
    },[]);
    
    const handleLogin = (e) =>{
        e.preventDefault();
        if (email==='admin@gmail.com' && password === 'admin1234'){
            alert("Login Success");
            localStorage.setItem('auth','true');
            navigate('/admin');
        } else{
            alert("Wrong email or password");
        }
    };

    return(
        <div style={{padding:'20px'}}>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input ref={emailRef} type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <br/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;