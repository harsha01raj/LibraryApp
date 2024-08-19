import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState("");
  const navigate = useNavigate();
  const bookFetch = async () => {
    const token = localStorage.getItem("Token");
    if (!token) {
      alert("Your are not login please login first...");
      navigate("/login");
    }
    try {
      const res = await fetch(
        "https://librarybackend-1-529i.onrender.com/book/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setBooks(data.Book);
      console.log(books);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete=async(id)=>{
    const token = localStorage.getItem("Token");
    // console.log(id)
    // console.log(token)
    if (!token) {
      alert("Your are not login please login first...");
      navigate("/login");
    }
    try {
      const res=await fetch(`https://librarybackend-1-529i.onrender.com/book/${id}`,{
        method:"DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":"application/json"
        },
      });
      const data = await res.json();
      console.log(data)
      alert("Book deleted successfully");
      bookFetch();
    } catch (error) {
      console.log(error.message);
      alert(error.message)
    }
  }

 
 
  useEffect(() => {
    bookFetch();
  }, []);
  return (
    <>
      <h1 className="heading">Books</h1>
      <div id="home">
        {books ? (
          books.map((book) => {
            return (
              <div key={book._id} className="card">
                <h2>_id:{book._id}</h2>
                <h2>Title: {book.title}</h2>
                <h2>Author: {book.author}</h2>
                <div>
                  <button onClick={()=>{navigate('/edit'),localStorage.setItem("id",JSON.stringify(book._id))}}>Edit</button>
                  <button onClick={()=>handleDelete(book._id)}>Delete</button>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No Books to display.</h2>
        )}
      </div>
    </>
  );
};

export default Home;
