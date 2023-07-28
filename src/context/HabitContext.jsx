import { createContext, useContext, useReducer, useState } from "react";
import { HabitReducer } from "../reducer";

export const HabitContext = createContext();
export const HabitProvider = ({ children }) => {
  const intialState = {
    habits: [
      {
        id: 1,
        name: "Running",
        repeat: "Daily",
        goal: "1 times daily",
        timeOfDay: "Morning",
        start: "Today",
      },
      {
        id: 2,
        name: "Drink water",
        repeat: "Daily",
        goal: "4 times daily",
        timeOfDay: "Anytime",
        start: "Today",
      },
    ],
    archiveHabits: [],
  };

  const [habitState, habitDispatch] = useReducer(HabitReducer, intialState);
  const [showAddHabitModal, setShowAddHabitModal] = useState(false);

  return (
    <HabitContext.Provider
      value={{
        habitState,
        habitDispatch,
        showAddHabitModal,
        setShowAddHabitModal,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useData = () => useContext(HabitContext);
