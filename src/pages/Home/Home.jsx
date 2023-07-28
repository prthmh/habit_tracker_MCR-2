import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { BsFillArchiveFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useData } from "../../context/HabitContext";
import HabitList from "./componentz/HabitList/HabitList";
import AddHabitModal from "./componentz/AddHabitModal/AddHabitModal";

const Home = () => {
  const {
    habitState: { habits },
    showAddHabitModal,
    setShowAddHabitModal,
  } = useData();
  //   const [showAddHabitModal, setShowAddHabitModal] = useState(false);
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
        <button onClick={() => setShowAddHabitModal(true)} className="btn">
          {" "}
          <AiOutlinePlusCircle /> Add habit
        </button>
      </div>
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
