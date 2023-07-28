import React from "react";
import "./Home.css";
import { BsFillArchiveFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useData } from "../../context/HabitContext";
import HabitList from "./componentz/HabitList/HabitList";

const Home = () => {
  const {
    habitState: { habits },
  } = useData();
  console.log(habits);
  return (
    <div>
      <div className="header">
        <h1>Habit Tracker</h1>
        <h3>
          <span className="archive_btn">
            <Link
              to="/archive"
              style={{
                textDecoration: "none",
                font: "inherit",
                color: "inherit",
              }}
            >
              <BsFillArchiveFill />{" "}
              <span className="archive_txt">Go to Archive</span>
            </Link>
          </span>
        </h3>
      </div>
      <HabitList list={habits} />
    </div>
  );
};

export default Home;
