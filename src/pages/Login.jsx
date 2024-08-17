import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const payload = {
      email,
      password,
    };
    console.log(payload);
    try {
      const res = await fetch(
        "https://librarybackend-1-529i.onrender.com/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      // console.log(data);
      alert(data.Message);
      if (data.Token) {
        localStorage.setItem("Token", data.Token);

        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div id="CreateBook">
      <h1>Login Here</h1>
      <div className="title">
        <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input
        type="text"
        placeholder="Enter your register email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className="title">
        <label>Password : </label>
      <input
        type="text"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="author"
      />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
