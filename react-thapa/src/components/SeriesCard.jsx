export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#a0cf74" : "#eeec65"}`,
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer"
  };

  const ratingClass = rating >= 8.5 ? "super-hit" : "average";

  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className="card-content">
        <h1>Name: {name}</h1>
        <h3>Rating: <span className= {`rating ${ratingClass}`}>
           {rating} 
           </span></h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
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
