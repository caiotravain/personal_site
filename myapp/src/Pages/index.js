import React from "react";
import Header from "../Components/header";
import styles from "../Styles/index.module.css";
import Eu from "../Assets/caio.jpg";


function Index(props) {

  return (
    <div className={styles.html}>
      <Header/>
        <div className={styles.card}>
            <h1>Welcome!</h1>
            <div className={styles.row}>
                <img src={Eu}/>
                <p>Hi there! My name is <bolder> Caio Travain</bolder>! I’,m a enthusiastic computer engineering student at Insper! Currently I’m working with web applications and API’s! Wanna chat? DM me! </p>
            </div>
            <h3>Say Hi!</h3>
        </div>
        <button className={styles.down}>
            <img/>
        </button>
    </div>
  );
}
export default Index;
