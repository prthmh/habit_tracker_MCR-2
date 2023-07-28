import React from "react";
import "./HabitList.css";
import { useData } from "../../../../context/HabitContext";

const HabitList = ({ list }) => {
  const {
    habitState: { habits },
  } = useData();
  return (
    <div className="list">
      {habits?.map((item) => (
        <div className="item" key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
