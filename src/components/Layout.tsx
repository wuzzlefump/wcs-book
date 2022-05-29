import * as React from "react";
import { BiBook } from "react-icons/bi";
import styles from "./layout.module.css";
import { useNavigate } from "react-router";
export default function Layout(props: { children: any }) {
  let navigate = useNavigate();
  return (
    <div className={styles.App}>
      <div className={styles.nav}>
        <BiBook
          onClick={() => navigate("/")}
          style={{
            fontSize: "45px",
            paddingLeft: "10px",
            color: "gray",
            cursor: "pointer",
          }}
        ></BiBook>
      </div>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
}
