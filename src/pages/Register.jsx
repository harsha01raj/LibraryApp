import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [roles,setRoles]=useState("");
  const Navigate=useNavigate();

  const handleSubmit=async()=>{
    const payload={
      username,
      email,
      password,
      roles
    }
    console.log(payload)
    try {
     const res=await fetch("https://librarybackend-1-529i.onrender.com/user/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(payload),
     });
     const data=await res.json();
     console.log(data.user);
     alert(data.Message);
     Navigate("/login");
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div id="Register">
      <div className="input">
      <label>Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="text" placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)} />
      </div>
      <div className="input">
      <label>Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="text" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div className="input">
      <label >Password : </label>
      <input type="password" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div className="input">
      <label>Role : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <select value={roles} onChange={(e)=>setRoles(e.target.value)}>
        <option value="CREATOR">CREATOR</option>
        <option value="VIEWER">VIEWER</option>
        <option value="VIEW_ALL">VIEW_ALL</option>
      </select>
      </div>
      <button onClick={handleSubmit} className="Button">Submit</button>
    </div>
  );
};

export default Register;
