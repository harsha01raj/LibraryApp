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
                <h2>Title: {book.title}</h2>
                <h2>Author: {book.author}</h2>
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
