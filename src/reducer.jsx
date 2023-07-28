export const HabitReducer = (habitState, { type, payload }) => {
  switch (type) {
    case "ADD_HABIT":
      return { ...habitState, habits: [...habitState.habits, payload] };
    default:
      return habitState;
  }
};
