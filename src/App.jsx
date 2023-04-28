import React, { useEffect, useState } from "react";
import search from "./api";
import Card from "./Card";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setloading] = useState(true);

  const handleSearch = () => {
    setloading(true);
    search(searchTerm)
      .then((res) => {
        setBooks(res.data.items || []);
      })
      .finally(() => setloading(false));

    const element = document.getElementById("books-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    search("").then((res) => {
      setBooks(res.data.items);
      setloading(false);
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
      }}
    >
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white">Book Search</h1>
            <div className="form-control">
              <div className="input-group flex justify-center text-black">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch} className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className="w-full flex justify-center h-40 items-center">
          <progress className="progress w-56"></progress>{" "}
        </div>
      )}
      <div
        id="books-section"
        className="container grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 gap-y-40"
      >
        {books &&
          !loading &&
          books.map((item, index) => (
            <div
              key={item.id + item.etag}
              className="flex justify-center items-center h-96"
            >
              <Card
                id={index}
                image={item.volumeInfo.imageLinks?.thumbnail}
                title={item.volumeInfo.title}
                info={item.volumeInfo}
                previewLink={item.volumeInfo.previewLink}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
