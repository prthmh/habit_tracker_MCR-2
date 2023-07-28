import React, { useState } from "react";
import "./AddHabitModal.css";
import { useData } from "../../../../context/HabitContext";

const AddHabitModal = ({ setShowAddHabitModal }) => {
  const {
    habitState: { habits },
    habitDispatch,
  } = useData();
  const [habitData, setHabitData] = useState({
    id: habits.length + 1,
    name: "",
    repeat: "",
    goal: "",
    timeOfDay: "",
    start: "",
  });
  const [showErr, setShowErr] = useState(false);

  const handleHabitChange = (e) => {
    setHabitData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(habitData);

  const handleSubmit = (e) => {
    e.preventDefault();
    let empltyFields = Object.keys(habitData).filter(
      (key) => habitData[key] === ""
    );
    if (empltyFields.length > 0) {
      setShowErr(true);
    } else {
      setShowErr(false);
      habitDispatch({ type: "ADD_HABIT", payload: habitData });
      setShowAddHabitModal(false);
    }
  };

  return (
    <div className="add_habit">
      <h2 style={{ margin: "0" }}>Add Habit</h2>
      <form className="habit_form" onSubmit={handleSubmit}>
        <label className="habit_label">
          Name
          <input
            className="habit_input"
            type="text"
            placeholder="Enter habit"
            value={habitData.name}
            name="name"
            onChange={handleHabitChange}
          />
        </label>
        <label className="habit_label">
          Repeat
          <select
            name="repeat"
            onChange={handleHabitChange}
            className="habit_dropdown"
          >
            <option value="">Select</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </label>
        <label className="habit_label">
          Time of the day
          <select
            name="timeOfDay"
            onChange={handleHabitChange}
            className="habit_dropdown"
          >
            <option value="">Select</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
          </select>
        </label>
        <label className="habit_label">
          Goal
          <select
            name="goal"
            onChange={handleHabitChange}
            className="habit_dropdown"
          >
            <option value="">Select</option>
            <option value="1 time daily">1 time daily</option>
            <option value="2 times daily">2 times daily</option>
            <option value="3 times daily">3 times daily</option>
            <option value="4 times daily">4 times daily</option>
          </select>
        </label>
        <label className="habit_label">
          Start
          <select
            name="start"
            onChange={handleHabitChange}
            className="habit_dropdown"
          >
            <option value="">Select</option>
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="Next Week">Next Week</option>
          </select>
        </label>
        {showErr && (
          <span style={{ color: "red" }}>Select Appropriate options</span>
        )}
        <button type="submit">Add Habit</button>
      </form>
      <button onClick={() => setShowAddHabitModal(false)}>Cancel</button>
    </div>
  );
};

export default AddHabitModal;
