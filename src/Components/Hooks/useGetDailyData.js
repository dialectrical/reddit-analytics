import { useEffect } from "react";
import axios from "axios";
import rateLimit from "axios-rate-limit";

export const getDailyData = (time, url) => {
  const hourStart = time[0];
  const hourEnd = hourStart + 35400;
  const http = rateLimit(axios.create(), {
    maxRequests: 1,
    preMilliseconds: 1000,
    maxRPS: 1
  });
  let test = [];

  const fetchData = async x => {
    await http
      .get(url + "&after=" + x + "&before=" + hourEnd)
      .then(response => test.push(response.data.data.length));
  };

  const dailyData = async () => {
    for (let item of time) {
      await fetchData(item);
      console.log(test);
    }
    return;
  };

  dailyData();
  return test;
};
