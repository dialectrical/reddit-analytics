export const useGetWeekStart = () => {
  const timestamp = new Date(Date.now());
  timestamp.setHours(0, 0, 0, 0);
  const today = timestamp.getDay();
  if (today === 0) {
    return timestamp - 604800000;
  } else if (today === 1) {
    return timestamp - (604800000 + 86400000);
  } else if (today === 2) {
    return timestamp - (604800000 + 86400000 * 2);
  } else if (today === 3) {
    return timestamp - (604800000 + 86400000 * 3);
  } else if (today === 4) {
    return timestamp - (604800000 + 86400000 * 4);
  } else if (today === 5) {
    return timestamp - (604800000 + 86400000 * 5);
  } else if (today === 6) {
    return timestamp - (604800000 + 86400000 * 6);
  }
};
