import seriesData from "../api/seriesData.json"

const NetflixSeries = () => {

     return (
        <ul>
            {
                seriesData.map((curEle) => {
    return (<li key={curEle.id}>
      <div>
        <img src={curEle.img_url} alt={curEle.name} width="40%" height="40%"/>
      </div>
      <h1>Name: {curEle.name}</h1>
      <h3>Rating: {curEle.rating}</h3>
      <p>Summary: {curEle.summary}</p>
      <p>Genre: {curEle.genre}</p>
      <p>Cast: {curEle.cast}</p>
      <a href={curEle.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
      {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
      {/* <button>{canWatch}</button> */}
    </li>);
                })
            }

    </ul>
  )


  /* const name = "Queen of Tears";
  const rating = "8.2";
  const summary = "Baek Hyon-woo and Hang Hae-in navigating a tense relationship,both at home and at work. But upon deciding his future, Hyun-woo pays a visits to his family."
  let age = 19;
 */
  /* let canWatch = "Not Available";
  if(age >= 18 ) canWatch = "Watch Now"; */

  /* const canWatch = () => {
    if(age >= 18) return "Watch Now";
    return "Not Available";
  }; */

 /*  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  } */

  /* if(age < 18){
    return(
      <div>
      <div>
        <img src="images.jpeg" alt="images.jpeg"/>
      </div>
      <h1>Name: {name}</h1>
      <h3>Rating: {5+4.2}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
      <button>Not Available</button>
    </div>
    )
  } */
 
}

export default NetflixSeries;
