import React from "react";
import { useState } from "react";
import Header from "../Components/header";
import styles from "../Styles/index.module.css";
import Eu from "../Assets/caio.jpg";
import arrow from "../Assets/arrow.png";

function Index(props) {
  
const [appear, setAppear] = React.useState(false);

document.addEventListener("scroll", (event) => {
  let scroll = window.scrollY ;
  if (scroll > 200) {
    setAppear(true);
  }
  else {
    setAppear(false);
  }
});



function down(){
    window.scrollTo(0, 800);
}


  

  return (
    <div id="root">
      <Header title = "Caio Travain"/>
        <div className={styles.card}>
            <h1>Welcome!</h1>
            <div className={styles.row}>
                <img src={Eu}/>
                <p>Hi there! My name is Caio Travain! I’,m a enthusiastic computer engineering student at Insper! Currently I’m working with web applications and API’s! Wanna chat? DM me! </p>
            </div>
            <h3>Say Hi!</h3>
        </div>
        <button className={styles.down} onClick={down}>
            <img src={arrow}/>
        </button>
        {appear ?  (<Header title = "About Me"/>) : <div className={styles.empty}/>}
       
        <div className={styles.about}>
        <img src={Eu} className={styles.about_img} />
          <p>I’m a 19-year-old boy, born in a small town in the countryside of Brazil. I studied English my whole life while  competing in several competitions involving STEAM abilities and English proficiency.
<br/>I was always fascinated with computers and imagined how they worked. Now I’m having the opportunity to learn and develop applications such as websites in different programming languages.</p>

        </div>
        <button className={styles.down} onClick={down}>
            <img src={arrow} />
        </button>
        
    </div>
  );
}
export default Index;
