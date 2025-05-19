// import React from "react";

export const App = () => {
  return (
    <>
      <NetflixSeries/>
      <NetflixSeries/>
      <NetflixSeries/>
      <NetflixSeries/>
    </>
  );
};
// export const App = () => {
//   return <h1>Hello, Deepali Singh</h1>
//   // return React.createElement('h1', null, "Hello Ritesh Singh")
// };


const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = "8.2";
  const summary = "Baek Hyon-woo and Hang Hae-in navigating a tense relationship,both at home and at work. But upon deciding his future, Hyun-woo pays a visits to his family."
  let age = 19;

  /* let canWatch = "Not Available";
  if(age >= 18 ) canWatch = "Watch Now"; */

  const canWatch = () => {
    if(age >= 18) return "Watch Now";
    return "Not Available";
  };

  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  }

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
  return (
    <div>
      <div>
        <img src="images.jpeg" alt="images.jpeg"/>
      </div>
      <h1>Name: {name}</h1>
      <h3>Rating: {5+4.2}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
      {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
      {/* <button>{canWatch}</button> */}
      <button>{canWatch()}</button>
    </div>
  )
}