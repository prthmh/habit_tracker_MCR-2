import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../context/HabitContext";
import "./SingleHabit.css";
import AddHabitModal from "../Home/componentz/AddHabitModal/AddHabitModal";

const SingleHabit = () => {
  const { habitId } = useParams();
  const {
    habitState: { habits },
    showAddHabitModal,
    setShowAddHabitModal,
  } = useData();
  const navigate = useNavigate();
  const findHabit = habits.find((habit) => habit.id === Number(habitId));
  console.log(findHabit);
  return (
    <div className="single_habit">
      <h2 style={{ marginTop: "0" }}>{findHabit.name}</h2>
      <div className="info">
        <p>
          <b>Repeat: </b>
          {findHabit.repeat}
        </p>
        <p>
          <b>Goal: </b>
          {findHabit.goal}
        </p>
        <p>
          <b>Time of the day: </b>
          {findHabit.timeOfDay}
        </p>
        <p>
          <b>Start: </b>
          {findHabit.start}
        </p>
      </div>
      <div className="action_btns">
        <button className="btn" onClick={() => setShowAddHabitModal(true)}>
          Edit Habit
        </button>
        <button className="btn" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
      {showAddHabitModal && (
        <div className="modal">
            {console.log("ass")}
          <AddHabitModal
            setShowAddHabitModal={setShowAddHabitModal}
            editHabit={findHabit}
          />
        </div>
      )}
    </div>
  );
};

export default SingleHabit;
