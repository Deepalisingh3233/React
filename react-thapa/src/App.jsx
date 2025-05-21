// import React from "react"
import NetflixSeries from "./components/NetflixSeries"
// import "./components/Netflix.css"
import styles from "./components/Netflix.module.css"


export const App = () => {
  return (
  <section className="container">
    <h1 className={styles["card-heading"]}>List of Best Netflix Series</h1>
    <NetflixSeries />
  </section>
  );
};

// export const App = () => {
//   return <h1>Hello, Deepali Singh</h1>
//   // return React.createElement('h1', null, "Hello Ritesh Singh")
// };

