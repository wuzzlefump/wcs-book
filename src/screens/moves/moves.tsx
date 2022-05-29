import * as React from "react";
import Model from "@expressive/mvc";
import styles from "./moves.module.css";
import { AgGrid } from "../../components/AgGrid/AgGrid";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import basicList from "./basics.json";
import sfList from "./sf.json";
import bronzeList from "./bronze.json";

class Move extends Model {
  move: any = [];
  moveName: string = "";
  changeMove = (list: any, value: string) => {
    let newMove = list.find((item: any) => {
      return value === item.enum;
    });
    this.move = newMove;
    this.moveName = newMove.name;
  };
}

export default function Moves() {
  const { move, moveName, changeMove } = Move.use();
  let navigate = useNavigate();
  let heading = () => {
    if (window.location.href.includes("beginners")) {
      return "Basics";
    } else if (window.location.href.includes("sf")) {
      return "Social Foundations";
    } else {
      return "Bronze";
    }
  };
  let currentList = () => {
    if (heading() === "Basics") {
      return basicList;
    } else if (heading() === "Social Foundations") {
      return sfList;
    } else {
      return bronzeList;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 style={{ textAlign: "center", color: "gray" }}>{heading()}</h1>
        <label
          style={{
            display: "block",
            marginTop: "10px",
            marginBottom: "10px",
            fontWeight: "bolder",
          }}
        >
          <Select
            options={currentList().map((item: any) => {
              return { label: item.name, value: item.enum };
            })}
            onChange={(e) => changeMove(currentList(), e?.value)}
            placeholder={"Moves..."}
          />
        </label>
        <AgGrid
          columns={[
            {
              field: "step",
              width: 300,
              cellStyle: { whiteSpace: "normal" },
              autoHeight: true,
            },
            {
              field: "count",
              width: 300,
              cellStyle: { whiteSpace: "normal" },
              autoHeight: true,
            },
            {
              field: "footMovement",
              width: 300,
              cellStyle: { whiteSpace: "normal" },
              autoHeight: true,
            },
            {
              field: "turn",
              width: 300,
              cellStyle: { whiteSpace: "normal" },
              autoHeight: true,
            },
            {
              field: "lead",
              width: 300,
              cellStyle: { whiteSpace: "normal" },
              autoHeight: true,
            },
          ]}
          height={600}
          width={window.innerWidth}
          gridOptions={{ rowData: move.steps ? move.steps : [] }}
        />

        <button className={styles.button} onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
}
