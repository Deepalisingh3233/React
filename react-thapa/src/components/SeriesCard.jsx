export const SeriesCard = ({data}) => {

  const {id, img_url, name, rating, description, cast, genre, watch_url} = data;
    return (
        <li>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%"/>
      </div>
      <h1>Name: {name}</h1>
      <h3>Rating: {rating}</h3>
      <p>Summary: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
      {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
      {/* <button>{canWatch}</button> */}
    </li>);
}