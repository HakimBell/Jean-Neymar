import React from "react";
import { useParams } from "react-router-dom";

const ErrorBooks = () => {
  const { id } = useParams();

  const Errordetail = {
    id: id,
    title: "Cette page reste encore à écrire...",
    description:
      "Le génie est en moi, mais malheureusement il prend du temps à se manifester.",
  };

  return (
    <div>
      <h2>{Errordetail.title}</h2>
      <p>{Errordetail.description}</p>
    </div>
  );
};

export default ErrorBooks;
