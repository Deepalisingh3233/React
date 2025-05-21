import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  // const btn_style = {};

  const ButtonThapa = styled.button({
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#a0cf74" : "#eeec65"}`,
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer"
  })

 /*  const ButtonThapa = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    fontSize: 1.6rem;
    background-color: `${rating >= 8.5 ? #a0cf74 : #eeec65}`;
    color: #000;
    fontWeight: bold;
    cursor: pointer
  ` */

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className={styles["card-content"]}>
        <h1>Name: {name}</h1>
        <h3>Rating: <span className= {`${styles.rating} ${ratingClass}`}>
           {rating} 
           </span></h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
          <ButtonThapa>Watch Now</ButtonThapa>
        </a>
      </div>
    </li>
  );
};

{
  /* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */
}
{
  /* <button>{canWatch}</button> */
}
