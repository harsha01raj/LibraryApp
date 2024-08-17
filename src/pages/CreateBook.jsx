import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const payload = {
      title,
      author,
    };
    const token = localStorage.getItem("Token");
    if (!token) {
      alert("Your are not login please login first...");
      navigate("/login");
    }
    console.log(payload);
    try {
      const res = await fetch(
        "https://librarybackend-1-529i.onrender.com/book/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      console.log(data);
      alert(data.Message);
      setTitle("");
      setAuthor("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div id="CreateBook">
      <h1>Create Online Book</h1>
      <div className="title">
        <label>Title : &nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="title">
        <label>Author : </label>
        <input
          type="text"
          placeholder="Enter Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="author"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateBook;
