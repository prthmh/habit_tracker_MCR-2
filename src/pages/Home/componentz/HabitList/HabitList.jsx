import React from "react";
import "./HabitList.css";
import { useData } from "../../../../context/HabitContext";
import { Link } from "react-router-dom";

const HabitList = ({ list }) => {
  const {
    habitState: { habits },
  } = useData();
  return (
    <div className="list">
      {habits?.map((item) => (
        <Link
          to={`/habit/${item.id}`}
          key={item.id}
          style={{
            textDecoration: "none",
            font: "inherit",
            color: "inherit",
          }}
        >
          <div className="item">
            <h3>{item.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HabitList;
