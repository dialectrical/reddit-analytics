import { useGetWeekStart } from "./useGetWeekStart";

export const useGetWeeklyTimetable = () => {
  const weekStart = useGetWeekStart();

  let newWeeklyTimetable = [[], [], [], [], [], [], []];
  for (let d = 0; d < 7; d++) {
    for (let h = 0; h < 24; h++) {
      let searchStart = weekStart + d * 86400000 + h * 3600000;
      newWeeklyTimetable[d].push(searchStart / 1000);
    }
  }

  return newWeeklyTimetable;
};
