import React from "react";
import styles from "../Styles/header.module.css";



function Header(props) {
  const title = props.title;
  return (
    <div className={styles.Head}>
      <h1> {title}</h1>
        <div>
        <button>About Me</button>
        <button >Contact Me</button>
        </div>
    </div>
  );
}
export default Header;
