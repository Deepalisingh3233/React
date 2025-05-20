export const SeriesCard = (props) => {
    return (
        <li>
      <div>
        <img src={props.curEle.img_url} alt={props.curEle.name} width="40%" height="40%"/>
      </div>
      <h1>Name: {props.curEle.name}</h1>
      <h3>Rating: {props.curEle.rating}</h3>
      <p>Summary: {props.curEle.summary}</p>
      <p>Genre: {props.curEle.genre}</p>
      <p>Cast: {props.curEle.cast}</p>
      <a href={props.curEle.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
      {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
      {/* <button>{canWatch}</button> */}
    </li>);
}