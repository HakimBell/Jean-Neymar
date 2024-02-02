import React from "react";
import BookCover2 from "../assets/BookCover2.jpg";
import { Link } from "react-router-dom";

const booksData = [
  {
    title: "Il me reste encore un œil",
    cover: BookCover2,
    summary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt molestias dolorum expedita necessitatibus rem ullam vel consectetur sapiente porro. Magnam, aspernatur maiores debitis deleniti iure illo dolore libero consectetur consequuntur!",
  },
];

export default function HomePage() {
  return (
    <>
      <h1>Prochainement en librairie</h1>
      <div>
        <div>
          <Link to="/error/1">
            <img src={booksData[0].cover} alt="" height="300px" />
          </Link>
          <h3>Il me reste encore un oeil</h3>
          <div>
            <p style={{ fontSize: "40px" }}>{booksData[0].summary}</p>
          </div>
        </div>
      </div>
    </>
  );
}
