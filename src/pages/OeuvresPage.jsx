import React from "react";
import { useState } from "react";
import BookCover0 from "../assets/BookCover0.jpg";
import BookCover1 from "../assets/BookCover1.jpg";
import BookCover2 from "../assets/BookCover2.jpg";
import { Link } from "react-router-dom";

const booksData = [
  {
    title: "Après coup, Jean rigole",
    cover: BookCover0,
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia non ex sequi itaque delectus quibusdam natus nihil tempore ipsam incidunt magni provident consequatur, repudiandae corporis porro nobis quidem dolores?",
  },
  {
    title: "Des vacances aux Bahamas",
    cover: BookCover1,
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia maxime dolor iste, eligendi iusto dolorum reprehenderit eveniet odio maiores aliquid aperiam at numquam culpa libero ipsa animi minus asperiores vel.",
  },
  {
    title: "Il me reste encore un œil",
    cover: BookCover2,
    summary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt molestias dolorum expedita necessitatibus rem ullam vel consectetur sapiente porro. Magnam, aspernatur maiores debitis deleniti iure illo dolore libero consectetur consequuntur!",
  },
];

export default function OeuvresPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      <h1>Ma vie, Mon oeuvre</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {booksData.map((book, index) => (
          <div
            key={index}
            style={{ margin: "100px" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link to="/error/2">
              <img
                src={book.cover}
                alt={book.title}
                style={{ width: "200px", height: "300px" }}
              />
            </Link>
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
      {hoveredIndex !== null && (
        <div
          style={{
            marginTop: "20px",
            fontSize: "40px",
          }}
        >
          <p>{booksData[hoveredIndex].summary}</p>
        </div>
      )}
    </div>
  );
}
