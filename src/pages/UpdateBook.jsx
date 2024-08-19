import { useState } from "react";

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async () => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("Token");
    if (!title || !author) {
      alert("Please fill in all fields");
      return;
    }
    const payload = {
      title,
      author,
    };
    if (!token) {
      console.log("Token is not available in localstorage");
      return;
    }
    try {
      const res = await fetch(
        `https://librarybackend-1-529i.onrender.com/book/${id}`, // Corrected the query syntax
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      // Check if the response is OK and if it's JSON
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Expected JSON response");
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error.message);
      alert(error.message);
    }
  };
  return (
    <div id="CreateBook">
      <h1>Update Online Book</h1>
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

export default UpdateBook;
