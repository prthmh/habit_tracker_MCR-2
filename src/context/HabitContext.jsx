import { createContext, useContext, useReducer } from "react";
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
        goal: "10 times daily",
        timeOfDay: "Anytime",
        start: "Today",
      },
    ],
    archiveHabits: [],
  };

  const [habitState, habitDispatch] = useReducer(HabitReducer, intialState);

  return (
    <HabitContext.Provider value={{ habitState, habitDispatch }}>
      {children}
    </HabitContext.Provider>
  );
};

export const useData = () => useContext(HabitContext);
