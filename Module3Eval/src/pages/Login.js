import React, {useState} from "react";
import { useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const {login} = useAuth();
    const navigate =useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        const res= login(email,password);
        if(res.success){
            if(res.role==="Admin") navigate("/admin/dashboard");
            else navigate("/customers/dashboard");
        }else{
            alert("Invalid email or password");
        }
    };

    return(
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;