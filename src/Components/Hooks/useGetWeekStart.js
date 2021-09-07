import { useState, useEffect } from "react";

export const useGetWeekStart = () => {
  const [lastWeekStart, setLastWeekStart] = useState();
  const timestamp = new Date(Date.now());
  timestamp.setHours(0, 0, 0, 0);
  const today = timestamp.getDay();
  if (today === 0) {
    setLastWeekStart(timestamp - 604800000);
  } else if (today === 1) {
    setLastWeekStart(timestamp - (604800000 + 86400000));
  } else if (today === 2) {
    setLastWeekStart(timestamp - (604800000 + 86400000 * 2));
  } else if (today === 3) {
    setLastWeekStart(timestamp - (604800000 + 86400000 * 3));
  } else if (today === 4) {
    setLastWeekStart(timestamp - (604800000 + 86400000 * 4));
  } else if (today === 5) {
    setLastWeekStart(timestamp - (604800000 + 86400000 * 5));
  } else if (today === 6) {
    setLastWeekStart(timestamp - (604800000 + 86400000 * 6));
  }
  console.log(lastWeekStart);
  return lastWeekStart;
};
