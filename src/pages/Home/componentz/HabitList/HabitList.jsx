import React from "react";
import "./HabitList.css";

const HabitList = ({ list }) => {
  console.log("j", list);
  return (
    <div className="list">
      {list?.map((item) => (
        <div className="item" key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
