import React, { useState } from "react";
import "./Home.css";
import { BsFillArchiveFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useData } from "../../context/HabitContext";
import HabitList from "./componentz/HabitList/HabitList";
import AddHabitModal from "./componentz/AddHabitModal/AddHabitModal";

const Home = () => {
  const {
    habitState: { habits },
  } = useData();
  const [showAddHabitModal, setShowAddHabitModal] = useState(false);
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
      <button onClick={() => setShowAddHabitModal(true)}>Add habit</button>
      <HabitList list={habits} />
      {showAddHabitModal && (
        <div className="modal">
          <AddHabitModal setShowAddHabitModal={setShowAddHabitModal} />
        </div>
      )}
    </div>
  );
};

export default Home;
